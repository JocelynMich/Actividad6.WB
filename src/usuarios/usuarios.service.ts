import { OkPacket,RowDataPacket} from 'mysql2';
import connection from '../db/mySQLconnection';
import { User } from './usuarios.interface';

export class UserService {

    static async getUserById(userId: string): Promise<User | undefined> {
        return new Promise<User>((resolve, reject) => {
            const query = `SELECT * FROM Usuarios WHERE ID_Usuario = ?`;
            connection.query<User[] & RowDataPacket[][]> (query,[userId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getUsers(): Promise<User[] | undefined> {
        return new Promise<User[]>((resolve, reject) => {
            const query = `SELECT * FROM Usuarios`;
            connection.query<User[] & RowDataPacket[][]>(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createUser(userData: Omit<User, 'ID_Usuario'>): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const query = `INSERT INTO Usuarios SET ?`;
            connection.query<OkPacket>(query, userData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Usuario: insertedId, ...userData });
                }
            });
        });
    }
    
    
}