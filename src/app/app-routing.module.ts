import { AdministratorGuard } from './guards/administrator.guard';
import { DialogComponent } from './components/portfolio/dialog/dialog.component';
import { PortfolioComponent } from './components/portfolio/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { TableCryptocurrenciesComponent } from './components/table-cryptocurrencies/table-cryptocurrencies/table-cryptocurrencies.component';
import { VigilantGuard } from './guards/vigilant.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [VigilantGuard]},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent, canActivate: [AdministratorGuard]},
  { path: 'admin', component: BoardAdminComponent, canActivate: [AdministratorGuard] },
  { path: 'cryptocurrencies', component: TableCryptocurrenciesComponent},
  { path: 'portfolio', component: PortfolioComponent, canActivate: [VigilantGuard]},
  { path: 'portfolio', component: DialogComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
