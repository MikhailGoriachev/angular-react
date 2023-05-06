import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BlackListService {

    private list: string[] = [
        "test@gmail.com",
        "admin@test.com",
        "hello@world.info"
    ];

    public getAllBlockedEmails(): string[] {
        return this.list;
    }

    public checkEmail(email: string): Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => {
                let isBlocked = this.list.find(x => x === email) != undefined;
                console.log(`isBlocked prop: ${isBlocked}`);
                resolve(isBlocked);
            }, 2_000)
        })
    } // checkEmail
} // class BlackListService
