import { IUploader } from "../../core/interfaces/uploader.interface";
import { File } from "../../core/types/file.type";
export declare class Uploader implements IUploader {
    private bucketName;
    private s3;
    constructor();
    upload(file: File, contentType?: string): Promise<string>;
}
