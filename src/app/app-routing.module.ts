import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'filmes', loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesPageModule) },
  { path: 'detalhes/:id', loadChildren: () => import('./detalhes/detalhes.module').then(m => m.DetalhesPageModule) },
  { path: 'favoritos', loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {} 
