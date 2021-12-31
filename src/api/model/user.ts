/**
 * web-backend-swagger
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { UserRole } from './userRole';

export interface User { 
    id: number;
    first_name: string;
    last_name: string;
    profile_picture: string;
    gender: string;
    email?: string;
    role: UserRole;
    score: number;
    tasks_num: number;
    achievements: Array<number>;
    enabled: boolean;
    nick_name: string;
    addr_country?: string;
    school_name?: string;
    seasons?: Array<number>;
    successful?: boolean;
    cheat?: boolean;
    tasks?: Array<number>;
    co_tasks?: Array<number>;
    short_info?: string;
}