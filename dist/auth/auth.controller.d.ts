import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDTO): Promise<import("../user/interfaces/user.interface").User>;
    signin(dto: AuthDTO): Promise<{
        access_token: string;
    }>;
    signout(token: string): Promise<void>;
}
