import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfCardsComponent } from '../list-of-cards/list-of-cards.component';

const routes: Routes = [
    {
        path: '',
        component: ListOfCardsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListOfCardsRoutingModule { }