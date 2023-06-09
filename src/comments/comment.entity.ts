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
import { Post } from "../posts/post.entity";
import { User } from "../users/user.entity";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type:"text",})
    content!: string;

    @Column({nullable: true})
    userId!: number;
    @ManyToOne((_type)=> User, (user: User)=> user.comments)
    @JoinColumn()
    user!: User;

    @Column({nullable:true})
    postId!: number;
    @ManyToOne((_type)=> Post,(post:Post)=>post.comments)
    @JoinColumn()
    post!: Post;

    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
    

}