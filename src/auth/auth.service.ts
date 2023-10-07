import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signup() {
        return 'Hello this is signup'
    }
    signin() {
        return 'Hello this is signin'
    }
}