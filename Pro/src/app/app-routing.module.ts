import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { EditPartsComponent } from './edit-parts/edit-parts.component';
import { HomeComponent } from './home/home.component';
import { PartListtComponent } from './part-listt/part-listt.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'part',component:PartListtComponent},
  {path:'add',component:AddPartsComponent},
  {path:'edit/:id/:name/:price/:shelve_number',component:EditPartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
