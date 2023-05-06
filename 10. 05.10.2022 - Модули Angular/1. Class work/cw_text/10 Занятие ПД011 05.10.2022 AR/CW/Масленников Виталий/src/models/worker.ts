export class Worker {
    constructor(public id: number ,
                public fullName: string,
                public position: string,
                public gender: string,
                public admissionYear: number,
                public photoImg: string,
                public salary: number) {
    }

    lengthOfService() { 
        return new Date().getFullYear() - this.admissionYear; 
    }
}