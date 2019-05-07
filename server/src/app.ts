import Routes from "./routes/Routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
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
    // use combined preset
    this.app.use(morgan("combined"));
  }
}

export default new App().app;
