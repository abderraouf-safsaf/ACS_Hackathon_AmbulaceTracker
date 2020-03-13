import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { environment } from "src/environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
