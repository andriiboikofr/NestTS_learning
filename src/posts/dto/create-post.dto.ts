import {IsInt, IsString} from 'class-validator';

export class CreatePostDto{
    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsInt()
    readonly userId: number;

    }
