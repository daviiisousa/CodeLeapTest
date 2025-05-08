export type CareerForm = {
    username: string;
    title: string;
    content: string;
  };
  
export type Career = CareerForm & {
    id: number;
    created_datetime: string ;
  };
  