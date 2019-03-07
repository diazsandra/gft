import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { PerfilComponent } from "./components/perfil/perfil.component";

// Servicios
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, PerfilComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
