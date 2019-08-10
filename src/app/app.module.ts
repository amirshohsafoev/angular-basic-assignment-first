import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { WarningComponent } from "./warning/warning.component";
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [AppComponent, WarningComponent, SuccessComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
