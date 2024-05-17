import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
declare const JWTStrategy_base: new (...args: any[]) => Strategy;
export declare class JWTStrategy extends JWTStrategy_base {
    private config;
    private userService;
    constructor(config: ConfigService, userService: UserService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<import("../../user/interfaces/user.interface").User>;
}
export {};
