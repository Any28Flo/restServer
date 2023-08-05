import express, { Request, Response } from "express";
import cors from "cors";

require('dotenv').config()

export class Server {
    app: any
    port?: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();

    }
    midlewares() {
        this.app.use(cors())
    }
    routes() {
        this.app.get('/', (req: Request, response: Response) => {
            response.send('hello')
        })
    }
    start() {
        this.app.listen(this.port, () => {
            console.log("app is running on port", this.port)
        })
    }

}