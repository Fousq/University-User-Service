import { EntitySchema } from "typeorm";
import { User } from "../entity/user.entity";

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    tableName: 'user_account',
    columns: {
        id: {
            type: "bigint",
            primary: true,
            generated: true
        },
        username: {
            type: String
        },
        password: {
            type: String
        }
    }
});