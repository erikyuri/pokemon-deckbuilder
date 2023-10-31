import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxCardModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxOverlayService,
    IgxToastModule,
    IgxProgressBarModule
} from "igniteui-angular";



@NgModule({
    declarations: [
        SearchInputComponent
    ],
    imports: [
        CommonModule,
        IgxInputGroupModule,
        ReactiveFormsModule,
        IgxButtonModule,
        IgxIconModule,
        IgxRippleModule,
        IgxCardModule,
        IgxAutocompleteModule,
        IgxDropDownModule,
        IgxToastModule,
        IgxProgressBarModule
    ],
    exports: [
        SearchInputComponent,
        IgxCardModule,
        IgxIconModule,
        IgxButtonModule,
        IgxAutocompleteModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxToastModule,
        ReactiveFormsModule,
        IgxProgressBarModule
    ],
    providers: [IgxOverlayService]
})
export class ComponentsModule { }