export interface User {
    id: string;
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