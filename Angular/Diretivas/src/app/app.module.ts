import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { CartaoComponent } from './cartao/cartao.component';
import { BntDirective } from './bnt.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgclassComponent,
    DiretivaNgifComponent,
    DiretivaNgforComponent,
    DiretivaNgswitchComponent,
    CartaoComponent,
    BntDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
