import { NextFunction, Response } from "express";
import { RequestExten } from "../interfaces/request";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExten, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`) as {id: string};

        if (!isUser) {
            res.status(401);
            res.send('NO_TIENES_UN_JWT_VALIDO');
        } else {
            req.user = isUser;
            next();
        }
    } catch (e) {
        res.status(400);
        res.send("SESSION_NO_VALIDAD");
    }
}

export { checkJwt }