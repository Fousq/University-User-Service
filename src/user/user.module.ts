import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSchema } from "./schema/user.schema";

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {

}