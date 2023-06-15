import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './service/customer.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSlideToggleModule,    
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    AppRoutingModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    DatePipe
  ],
  providers: [
  CustomerService,
  DatePipe,
  ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }