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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uploader = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let Uploader = class Uploader {
    constructor() {
        this.bucketName = process.env.S3_BUCKET_NAME;
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        });
    }
    async upload(file, contentType) {
        try {
            const params = {
                Bucket: this.bucketName,
                Key: file.originalname,
                Body: file.buffer,
            };
            if (contentType) {
                params["ContentType"] = contentType;
            }
            const { Location } = await this.s3.upload(params).promise();
            return Location;
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
};
Uploader = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], Uploader);
exports.Uploader = Uploader;
//# sourceMappingURL=uploader.js.map