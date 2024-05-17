import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    healthCheck(res: Response): Promise<Response<any, Record<string, any>>>;
}
