import { Controller, Post, Body } from '@nestjs/common';
import { UserAuthDto } from './interfaces/user.dto.interfaces';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
    constructor(private userSerivce: UserService) {}

    @Post('/auth')
    async login(@Body() userAuthDto: UserAuthDto) {
        return await this.userSerivce.findUserByUsernameAndPassword(userAuthDto.username, userAuthDto.password);
    }
}