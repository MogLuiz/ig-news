
  
export interface IUser {
    name: string;
    age: number;
    adress: {
      street: string;
      isDowntown?: boolean;
    };
  }