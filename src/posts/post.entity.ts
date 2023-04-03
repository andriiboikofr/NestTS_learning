import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { User } from "../users/user.entity";
import {Comment} from "../comments/comment.entity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({type:"text",})
    content!: string;


    @Column({nullable: true})
    userId!: number;
    @ManyToOne((_type)=> User, (user:User)=> user.posts)
    @JoinColumn()
    user!: User;

    @OneToMany((_type)=> Comment, (comment: Comment)=> comment.post)
    comments!: Array<Comment>;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}