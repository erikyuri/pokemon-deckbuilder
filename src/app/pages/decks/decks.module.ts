import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks.component';
import { DecksRoutingModule } from './decks-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
    declarations: [
        DecksComponent
    ],
    imports: [
        CommonModule,
        DecksRoutingModule,
        ComponentsModule
    ]
})
export class DecksModule { }
