import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckBuilderComponent } from './deck-builder.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'new',
                pathMatch: 'full',
                component: DeckBuilderComponent
            },
            {
                path: ':name',
                component: DeckBuilderComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeckBuilderRoutingModule { }