import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AppComponent } from './app.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {path:'',redirectTo:'/one',pathMatch:'full'},
  {path:'two',component:TwoComponent},
  {path:'one',component:OneComponent},
  {path:'three',component:ThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
