import { Request, Response } from "express";


const getUsers = (req: Request, res: Response) => {
    res.status(200).send('get user routes')
}
const getUser = (req: Request, res: Response) => {
    res.status(200).send('get user')
}
const postUser = (req: Request, res: Response) => {
    res.status(200).send('post user routes')
}
const putUser = (req: Request, res: Response) => {
    res.status(200).send('put user routes')
}
const deleteUser = (req: Request, res: Response) => {
    res.send('user routes')
};
export {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser

}