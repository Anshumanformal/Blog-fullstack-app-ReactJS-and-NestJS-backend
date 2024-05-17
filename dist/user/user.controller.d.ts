import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { Response } from 'express';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserByEmail(res: Response, userEmail: any): Promise<Response<any, Record<string, any>>>;
    getUsers(res: Response): Promise<Response<any, Record<string, any>>>;
    getUser(res: Response, userID: any): Promise<Response<any, Record<string, any>>>;
    getMe(user: User): Promise<User>;
}
