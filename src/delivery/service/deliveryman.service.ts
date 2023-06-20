import { Injectable } from "@nestjs/common";

@Injectable()
export class DeliveryManService {
    
    async vehicles(): Promise<string> {
        return 'kombi'
    }
}