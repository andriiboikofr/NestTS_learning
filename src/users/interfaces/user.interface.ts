export interface User {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    posts: number[];
    comments: number[];
    createdAt: Date;
    updatedAt: Date;
  }