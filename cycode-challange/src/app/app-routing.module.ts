import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from '../app/page-one/page-one.component';
import {PageTwoComponent} from '../app/page-two/page-two.component';
import {PageThreeComponent} from '../app/page-three/page-three.component';

const routes: Routes = [
{path:'pageOne',component:PageOneComponent},
{path:'pageTwo',component:PageTwoComponent},
{path:'pageThree', component:PageThreeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
