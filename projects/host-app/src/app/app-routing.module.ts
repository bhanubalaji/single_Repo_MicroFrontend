import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const Mfe_Url ="http://localhost:4300/remoteEntry.js"
const routes: Routes = [
  // {path:"",component:AppComponent},
  {
    path:'exampletask',
    loadChildren:()=>{
    return loadRemoteModule({
      remoteEntry:Mfe_Url,
      remoteName:"mFEApp",
      exposedModule:"./ExampleTaskModule"
    }).then(m=>m.ExampleTaskModule)
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
