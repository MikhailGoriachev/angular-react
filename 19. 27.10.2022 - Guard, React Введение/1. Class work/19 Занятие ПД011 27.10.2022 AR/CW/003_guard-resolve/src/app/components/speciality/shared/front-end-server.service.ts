import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FrontEndServerService {

    constructor(private http: HttpClient) { }

    getTags() {
        return this.http.get('/api/tags/')
    }

    getTag(nameTag: any) {
        return this.http.get('/api/tags/' + nameTag)
    }

    getCss() {
        return this.http.get('/api/css/')
    }

}
