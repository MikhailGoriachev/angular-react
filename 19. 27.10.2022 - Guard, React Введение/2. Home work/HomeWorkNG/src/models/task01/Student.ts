// Класс Студент
import {Level} from "./Level";

export class Student {
    constructor(public id?: number,
                public fullName?: string,
                public dateOfBirth?: Date,
                public phone?: string,
                public email?: string,
                public level?: Level,
                public coach?: string,
                public group?: string) {
    }

    assign(obj: any) {
        Object.assign(this, obj);
        this.dateOfBirth = new Date(obj.dateOfBirth!);

        return this;
    }
}
