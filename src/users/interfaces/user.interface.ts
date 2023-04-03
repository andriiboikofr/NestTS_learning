export interface User {
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