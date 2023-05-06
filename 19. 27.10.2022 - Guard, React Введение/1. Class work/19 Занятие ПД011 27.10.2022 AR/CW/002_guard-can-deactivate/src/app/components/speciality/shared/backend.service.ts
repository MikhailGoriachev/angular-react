import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

// Для создания fake backend
// 1) npm install --save angular-in-memory-web-api
// 2) добавить в imports AppModule строку InMemoryWebApiModule.forRoot(BackendService)
// 3) добавить код, который будет использовать fake backend по адресу /api/tags 

@Injectable({
    providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let tags = [
            { id: 'h1', content: 'h1 тег заголовка первого уровня', paired: true, type: 'block' },
            { id: 'p', content: 'p тег параграфа для обычного текста', paired: true, type: 'block' },
            { id: 'b', content: 'b тег для выделения текста жирным начертанием', paired: true, type: 'inline' },
            { id: 'span', content: 'span тег для текста', paired: true, type: 'inline' },
            { id: 'br', content: 'br тег переноста на новую строку', paired: false, type: 'block' },
            { id: 'hr', content: 'br тег создающий горизонтальную линию', paired: false, type: 'block' },
        ];

        return { tags }
    }
}
