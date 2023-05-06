import {ReactForm09Component} from './01_reactive-forms/react-form09/react-form09.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {
    ReactForm01Component,
    ReactForm02Component,
    ReactForm03Component,
    ReactForm04Component,
    ReactForm05Component,
    ReactForm06Component,
    ReactForm07Component,
    ReactForm08Component,
    ReactForm10Component,
    ReactForm11Component,
    ReactForm12Component,
    ReactForm13Component,
    ReactForm14Component
} from './01_reactive-forms/index';

const routes: Routes = [
    {path: '', component: ReactForm01Component},
    {path: 'styles-forms', component: ReactForm02Component},
    {path: 'simple-reactive-form', component: ReactForm03Component},
    {path: 'validators-reactive-form', component: ReactForm04Component},
    {path: 'form-array-reactive-form', component: ReactForm05Component},
    {path: 'form-builder-reactive-form', component: ReactForm06Component},
    {path: 'add-remove-controls', component: ReactForm07Component},
    {path: 'form-autocomplete', component: ReactForm08Component},
    {path: 'alerts-reactive-form', component: ReactForm09Component},
    {path: 'observable-valueChanges', component: ReactForm10Component},
    {path: 'custom-validators', component: ReactForm11Component},
    {path: 'match-validator', component: ReactForm12Component},
    {path: 'async-form1', component: ReactForm13Component},
    {path: 'async-form2', component: ReactForm14Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
