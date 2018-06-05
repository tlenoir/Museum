import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { ProfilePage, SafePipe } from './profile';


@NgModule({
  declarations: [
    ProfilePage,
    SafePipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
