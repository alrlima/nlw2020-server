import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");
    items.forEach(
      (item) =>
        (item.imagem_url = `${process.env.UPLOAD_URL}util/${item.imagem}`)
    );

    return response.json(items);
  }
}

export default ItemsController;
