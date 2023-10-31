import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfCardsComponent } from './list-of-cards.component';
import { ListOfCardsRoutingModule } from './list-of-cards-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
    declarations: [
        ListOfCardsComponent
    ],
    imports: [
        CommonModule,
        ListOfCardsRoutingModule,
        ComponentsModule
    ]
})
export class ListOfCardsModule { }
