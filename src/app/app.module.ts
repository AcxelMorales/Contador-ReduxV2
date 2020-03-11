import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { contadorReducer } from "./contador/contador.reducer";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { ContadorModule } from "./contador/contador.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContadorModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
