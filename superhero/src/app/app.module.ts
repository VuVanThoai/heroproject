import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import {MainModule} from './main/main.module';
import { TempConverterPipe } from './core/pipes/temp-converter.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistraionComponent } from './registraion/registraion.component';
import {AdminComponent} from './admin/admin.component';
import {AdminModule} from './admin/admin.module';
import { MenuTopNavComponent } from './shared/components/menu-top-nav/menu-top-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TempConverterPipe,
    NotFoundComponent,
    LoginComponent,
    RegistraionComponent,
    AdminComponent,
    MenuTopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
