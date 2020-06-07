import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async create(request: Request, response: Response) {
    const {
      imagem,
      nome,
      email,
      telefone,
      latitude,
      longitude,
      cidade,
      uf,
      items,
    } = request.body;

    const trans = await knex.transaction();

    const point = {
      imagem: request.file.filename,
      nome,
      email,
      telefone,
      latitude,
      longitude,
      cidade,
      uf,
    };

    const insertedIds = await trans("points").insert(point);
    const pointId = insertedIds[0];

    const pointItems = items
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id: pointId,
        };
      });
    await trans("point_items").insert(pointItems);

    await trans.commit();

    return response.json({
      id: pointId,
      ...point,
    });
  }

  async index(request: Request, response: Response) {
    let sql = knex("points").leftJoin(
      "point_items",
      "points.point_id",
      "=",
      "point_items.point_id"
    );
    // .leftJoin("items","items.item_id","=","point_items.item_id");

    for (var prop in request.query) {
      if (Array.isArray(request.query[prop])) {
        let itensArray = String(request.query[prop]).split(",");
        sql.whereIn(prop, itensArray);
      } else {
        sql.where(prop, "like", String(request.query[prop]));
      }
    }

    const points = await sql
      .distinct()
      // .options({ nestTables: true, rowMode: 'array' })
      .select("points.*");

    const serializedPoints = points.map((point) => {
      return {
        ...point,
        imagem_url: `http://192.168.1.35:3333/uploads/${point.imagem}`,
      };
    });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex("points").where("point_id", id).first();

    if (!point) {
      return response.status(400).json({
        message: "Ponto de Coleta não encontrado!",
      });
    }

    const serializedPoint = {
      ...point,
      imagem_url: `http://192.168.1.35:3333/uploads/${point.imagem}`,
    };

    const items = await knex("items")
      .join("point_items", "items.item_id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.titulo");

    return response.json({ serializedPoint, items });
  }
}

export default PointsController;
