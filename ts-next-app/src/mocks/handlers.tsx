import { rest } from "msw";

export const handlers = [
  rest.get("/people", async (req, res, ctx) => {

    return res(ctx.status(200));
  }),
  rest.post("/people", async (req, res, ctx) => {

    return res(ctx.status(201));
  }),
];
