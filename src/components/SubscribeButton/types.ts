export interface ISubscribeButtonProps {
    priceId: string;
  }
  
export interface IUser {
    name: string;
    age: number;
    adress: {
      street: string;
      isDowntown?: boolean;
    };
  }