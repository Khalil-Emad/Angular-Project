import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListingItemsComponent } from './core/products/listing-items/listing-items.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'product',loadChildren:()=> import('./core/products/product.module').then(m=>m.ProductModule)},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
