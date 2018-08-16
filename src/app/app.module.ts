import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-rotas.module';

import { AppComponent } from './app.component';
import { CorpoComponent } from './pages/corpo/corpo.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DescricaoComponent } from './pages/descricao/descricao.component';



@NgModule({
  declarations: [
    AppComponent,
    CorpoComponent,
    FooterComponent,
    DescricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
