import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { MailingSettingsComponent } from './settings/mailing-settings/mailing-settings.component';


@NgModule({
  declarations: [SettingsComponent, LoginFormComponent, UserSettingsComponent, MailingSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
