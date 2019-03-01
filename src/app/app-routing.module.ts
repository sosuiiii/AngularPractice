import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HumansComponent } from './humans/humans.component';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HumanDetailComponent} from './human-detail/human-detail.component';

// constが後に来るとエラーになる
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'humans', component: HumansComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HumanDetailComponent }, 
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


