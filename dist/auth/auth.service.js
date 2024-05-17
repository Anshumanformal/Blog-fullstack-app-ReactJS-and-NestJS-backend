"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, jwt, config) {
        this.userService = userService;
        this.jwt = jwt;
        this.config = config;
    }
    async signup(dto) {
        try {
            const findUserInDB = await this.userService.findOneByEmail(dto.email);
            if (findUserInDB)
                throw new common_1.BadRequestException('Email already exists');
            const hash = await argon.hash(dto.password);
            const user = await this.userService.createUser({
                fullName: dto.fullName,
                age: dto.age,
                email: dto.email,
                password: hash
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException("User details already present");
        }
    }
    async signin(dto) {
        const user = await this.userService.findOneByEmail(dto.email);
        if (!user)
            throw new common_1.ForbiddenException('User with the given email was not found');
        const pwMatches = await argon.verify(user.password, dto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException('Password incorrect');
        return this.signToken(user.id, user.email);
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: this.config.get('JWT_ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC'),
            secret,
        });
        return {
            access_token: token,
        };
    }
    async signout(token) {
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map