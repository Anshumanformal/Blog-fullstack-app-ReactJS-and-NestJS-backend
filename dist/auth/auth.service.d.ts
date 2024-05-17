import { AuthDTO } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwt;
    private config;
    constructor(userService: UserService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthDTO): Promise<import("../user/interfaces/user.interface").User>;
    signin(dto: AuthDTO): Promise<{
        access_token: string;
    }>;
    signToken(userId: string, email: string): Promise<{
        access_token: string;
    }>;
    signout(token: string): Promise<void>;
}
