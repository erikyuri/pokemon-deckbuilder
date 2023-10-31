import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckBuilderComponent } from './deck-builder.component';
import { DeckBuilderRoutingModule } from './deck-builder-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DeckBuilderComponent,
    ],
    imports: [
        CommonModule,
        DeckBuilderRoutingModule,
        ComponentsModule,
        FormsModule
    ]
})
export class DeckBuilderModule { }
