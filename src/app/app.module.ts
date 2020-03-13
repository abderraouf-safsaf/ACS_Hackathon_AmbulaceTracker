import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { environment } from "src/environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AmbulanceLocationsViewerComponent } from "./ambulance-locations-viewer/ambulance-locations-viewer.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [AppComponent, AmbulanceLocationsViewerComponent],
  imports: [SocketIoModule.forRoot(config), BrowserModule, AppRoutingModule, NgZorroAntdModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
