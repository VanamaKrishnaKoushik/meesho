import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './electronics/audio/audio.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobileaccessoriesComponent } from './electronics/mobileaccessories/mobileaccessories.component';
import { OtherelectronicsComponent } from './electronics/otherelectronics/otherelectronics.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'electronics',component:ElectronicsComponent,
  children:[{path:'audio',component:AudioComponent},
{path:'mobileaccessories',component:MobileaccessoriesComponent},
{path:'otherelectronics',component:OtherelectronicsComponent}]},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
