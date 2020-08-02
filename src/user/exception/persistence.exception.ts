import { HttpException } from "@nestjs/common";

export class PersistenceException extends HttpException {
    constructor(objOrMsg: string | Object) {
        super(objOrMsg, 500);
    }
}