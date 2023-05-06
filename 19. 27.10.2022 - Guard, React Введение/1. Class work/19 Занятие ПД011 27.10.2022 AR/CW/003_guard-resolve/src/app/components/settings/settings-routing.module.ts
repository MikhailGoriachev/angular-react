import { MailingSettingsComponent } from './settings/mailing-settings/mailing-settings.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-services/auth-guard.service';
import { CanDeactivateGuardService } from './auth-services/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: 'settings', component: SettingsComponent,
    canActivate: [AuthGuardService], // использовать метод canActivate
    // canActivateChild: [AuthGuardService], // использовать метод canActivateChild
    children: [
      {
        path: 'user', component: UserSettingsComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
      {path: 'mailing', component: MailingSettingsComponent},
    ]
  },
  {path: 'login', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
