import {IsInt, IsString} from 'class-validator';

export class CreateCommentDto{
    @IsString()
    readonly content: string;

    @IsInt()
    readonly userId: number;

    @IsInt()
    readonly postId: number;
    }
