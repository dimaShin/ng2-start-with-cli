import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list/list';
import { FormComponent } from  './form/form';
import { NotyModule } from './noty/noty.module';

import { MissionControlComponent } from './test/MissionControlComponent';
import { AstronautComponent } from './test/AstronautComponent';

import { AppComponent } from './app.component';

console.info(NotyModule);

@NgModule({
  declarations: [
    AppComponent,
		ListComponent,
		FormComponent,
	  MissionControlComponent,
	  AstronautComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  NotyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
