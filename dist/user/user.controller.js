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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const validate_object_id_pipes_1 = require("../blog/shared/pipes/validate-object-id.pipes");
const guard_1 = require("../auth/guard");
const decorators_1 = require("../auth/decorators");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUserByEmail(res, userEmail) {
        const user = await this.userService.getUserByEmail(userEmail);
        if (!user)
            throw new common_1.NotFoundException('User does not exist!');
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async getUsers(res) {
        const users = await this.userService.getUsers();
        return res.status(common_1.HttpStatus.OK).json(users);
    }
    async getUser(res, userID) {
        const user = await this.userService.getUser(userID);
        if (!user)
            throw new common_1.NotFoundException('User does not exist!');
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async getMe(user) {
        return user;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)(':userEmail'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userEmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByEmail", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)(':userID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMe", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map