import express, { Request, Response } from "express";
require('dotenv').config()

export class Server {
    app: any
    constructor() {
        this.app = express();
        this.routes();
    }
    routes() {
        this.app.get('/', (req: Request, response: Response) => {
            response.send('hello')
        })
    }
    start() {
        this.app.listen(process.env.PORT, () => {
            console.log("app is running on port", process.env.PORT)
        })
    }

}