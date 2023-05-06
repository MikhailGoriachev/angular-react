import { MailingSettingsComponent } from './settings/mailing-settings/mailing-settings.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-services/auth-guard.service';

const routes: Routes = [
  {
    // маршрут settings защищен гардом доступа - переход по нему возможен
    // только при выполнении некоторого условия/некоторых условий
    path: 'settings', component: SettingsComponent,
    // массив гардов для доступа к сервису только при выполнении некоторых условий
    canActivate: [AuthGuardService], // использовать метод canActivate
    // canActivateChild: [AuthGuardService], // использовать метод canActivateChild

    // дочерние маршруты settings
    children: [
      {path: 'user-settings', component: UserSettingsComponent},
      {path: 'mailing-settings', component: MailingSettingsComponent},
    ]
  },
  {path: 'login', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
