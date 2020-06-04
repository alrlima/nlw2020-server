import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");
    items.map(
      (item) =>
        (item.imagem_url = "http://localhost:3333/uploads/" + item.imagem)
    );

    return response.json(items);
  }
}

export default ItemsController;
