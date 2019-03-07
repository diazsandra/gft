import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuardService]
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
