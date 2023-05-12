import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ag',
    loadChildren: () => import('./ag/ag.module').then( m => m.AgPageModule)
  },
  {
    path: 'hn',
    loadChildren: () => import('./hn/hn.module').then( m => m.HnPageModule)
  },
  {
    path: 'ou',
    loadChildren: () => import('./ou/ou.module').then( m => m.OuPageModule)
  },
  {
    path: 'vz',
    loadChildren: () => import('./vz/vz.module').then( m => m.VzPageModule)
  },
  {
    path: 'apple',
    loadChildren: () => import('./apple/apple.module').then( m => m.ApplePageModule)
  },
  {
    path: 'lemon',
    loadChildren: () => import('./lemon/lemon.module').then( m => m.LemonPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'raspberry',
    loadChildren: () => import('./raspberry/raspberry.module').then( m => m.RaspberryPageModule)
  },
  {
    path: 'watermelon',
    loadChildren: () => import('./watermelon/watermelon.module').then( m => m.WatermelonPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
