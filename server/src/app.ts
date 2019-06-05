import Routes from "./routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import rfs from "rotating-file-stream";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./config/swagger.json";
import cors from "cors";
import { errorMiddleware } from "./middlewares";

class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.app.use(errorMiddleware);
  }

  private config(): void {
    // initialize configuration
    dotenv.config();
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // secure Express apps by setting various HTTP headers
    this.app.use(helmet());
    // support cors
    this.app.use(cors());
    // use dev/combined preset
    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan("dev"));
    } else {
      const accessLogStream = rfs("access.log", {
        interval: "1d",
        path: path.join(__dirname, "log")
      });
      this.app.use(morgan("combined", { stream: accessLogStream }));
    }
    // setup swagger
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }
}

export default new App().app;
