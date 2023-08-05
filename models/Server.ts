import express, { Request, Response } from "express";
import cors from "cors";

import usersRoutes from '../routes/users.routes';

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

        this.app.use('/api/users', usersRoutes)
        this.app.use('/api', (req: Request, res: Response) => {
            res.send('ok');
        })
    }

    start() {
        this.app.listen(this.port, () => {
            console.log("app is running on port", this.port)
        })
    }

}