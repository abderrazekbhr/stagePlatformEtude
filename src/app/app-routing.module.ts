import { trigger, transition, useAnimation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { FilePageComponent } from './file-page/file-page.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';

const routes: Routes = [
  {path:"" ,component:PageAcceuilComponent,data: { animation:'slideInAnimation'  }
},
  {path:"acceuil" ,redirectTo:""},
  {path:"document" ,component:FilePageComponent,data: { animation: 'slideInAnimation' }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
