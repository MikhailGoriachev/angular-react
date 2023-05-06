import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { FrontEndServerService } from './front-end-server.service';

@Injectable({
    providedIn: 'root'
})
export class ResolveForCssService implements Resolve<any> {

    constructor(private frontServer: FrontEndServerService) { }

    resolve(): Observable<any> {
        return this.frontServer.getCss()
    }
}
