import { Injectable, UnauthorizedException } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { User } from "./entity/user.entity";
import { PersistenceException } from './exception/persistence.exception';

@Injectable()
export class UserService {
    constructor(private entityManager: EntityManager) {
    }

    findUserByUsernameAndPassword(username: string, password: string): Promise<User> {
        return this.entityManager.find<User>('User', { where: { username: username, password: password }})
        .then((result) => {
            return result.pop();
        }).catch((error) => {
            throw new PersistenceException(error.message);
        });
    }
}