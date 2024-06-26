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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const validate_object_id_pipes_1 = require("./shared/pipes/validate-object-id.pipes");
const guard_1 = require("../auth/guard");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    async getPosts(res) {
        const posts = await this.blogService.getPosts();
        return res.status(common_1.HttpStatus.OK).json(posts);
    }
    async getAllPostsByAuthor(res, authorID) {
        const posts = await this.blogService.getAllPostsByAuthor(authorID);
        if (!posts)
            throw new common_1.NotFoundException('Posts do not exist!');
        return res.status(common_1.HttpStatus.OK).json(posts);
    }
    async getPostByAuthor(res, postID, authorID) {
        const post = await this.blogService.getPostByAuthor(postID, authorID);
        if (!post)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json(post);
    }
    async addPost(res, createPostDTO) {
        const newPost = await this.blogService.addPost(createPostDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newPost
        });
    }
    async editPost(res, postID, createPostDTO) {
        const editedPost = await this.blogService.editPost(postID, createPostDTO);
        if (!editedPost)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post: editedPost
        });
    }
    async deletePost(res, postID, authorID) {
        const deletedPost = await this.blogService.deletePost(postID, authorID);
        if (!deletedPost)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been deleted!',
            post: deletedPost
        });
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.Get)('posts'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getPosts", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)('post/:authorID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('authorID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getAllPostsByAuthor", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)('post/:postID/:authorID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('postID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Param)('authorID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getPostByAuthor", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addPost", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Put)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('postID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "editPost", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Delete)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('postID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Query)('authorID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deletePost", null);
exports.BlogController = BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map