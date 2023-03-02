import { Injectable } from '@nestjs/common';


@Injectable()
export class UserRepositoryService {
  constructor() {}

    
    async getUserByID(userID: number): Promise<any> {
        const listUsers = [
            {
                name: 'test',
                email: 'data@example.com',
                address: 'cll32...',
            },
            {
                name: 'test2',
                email: 'data2@example.com',
                address: 'cll322222...',
            }
        ];
    

        return listUsers[userID]
    }
}
