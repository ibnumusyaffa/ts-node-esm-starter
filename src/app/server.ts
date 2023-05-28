import express, { Request, Response, NextFunction } from "express";
import { consola } from "consola";
import routes from "@/app/routes/index.js";
const app = express();
const PORT = process.env.PORT || 3000;
consola.wrapAll()
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
