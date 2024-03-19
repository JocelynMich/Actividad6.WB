export interface User {
    id_user: number;
    name: string;
    created_date: Date;
    created_by?: number | null;
    update_date?: Date| null;
    updated_by?: Date| null;
    delete_date?: Date | null;
    delete_by?: number | null;
  }