import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        
        console.error(exception);
        response.status(exception.getStatus()).json({ msg: exception.message });
    }

}