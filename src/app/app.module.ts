import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './panel/admin/admin.component';
import { NavbarComponent } from './panel/navbar/navbar.component';
import { SidebarComponent } from './panel/sidebar/sidebar.component';
import { ContentComponent } from './panel/content/content.component';
import { FooterComponent } from './panel/footer/footer.component';
import { ControlsidebarComponent } from './panel/controlsidebar/controlsidebar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriaComponent } from './almacen/categoria/categoria.component';
import { TablaCategoriaComponent } from './panel/tabla-categoria/tabla-categoria.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ControlsidebarComponent,
    LandingPageComponent,
    CategoriaComponent,
    TablaCategoriaComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
