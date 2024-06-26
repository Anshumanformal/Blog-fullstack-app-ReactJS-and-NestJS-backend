import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    getPosts(res: any): Promise<any>;
    getAllPostsByAuthor(res: any, authorID: any): Promise<any>;
    getPostByAuthor(res: any, postID: any, authorID: any): Promise<any>;
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
    editPost(res: any, postID: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any, authorID: any): Promise<any>;
}
