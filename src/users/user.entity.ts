import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Post } from "../posts/post.entity";
import { Comment } from "../comments/comment.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({default: "customer"})
    role!: string;

    @OneToMany((_type)=>Post, (post: Post)=>post.user)
    posts!: Array<Post>;

    @OneToMany((_type)=>Comment, (comment: Comment)=>comment.user)
    comments!: Array<Comment>;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}