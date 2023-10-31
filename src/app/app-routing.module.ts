import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'decks',
    loadChildren: () => import('../app/pages/decks/decks.module').then(m => m.DecksModule)
  },
  {
    path: 'deck-builder',
    loadChildren: () => import('../app/pages/deck-builder/deck-builder.module').then(m => m.DeckBuilderModule)
  },
  {
    path: 'card-search',
    loadChildren: () => import('../app/pages/list-of-cards/list-of-cards.module').then(m => m.ListOfCardsModule)
  },
  {
    path: '**',
    redirectTo: 'decks',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
