import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartListtComponent } from './part-listt/part-listt.component';
import { HomeComponent } from './home/home.component';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { EditPartsComponent } from './edit-parts/edit-parts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FreshPipe } from './fresh.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PartListtComponent,
    HomeComponent,
    AddPartsComponent,
    EditPartsComponent,
    FreshPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
