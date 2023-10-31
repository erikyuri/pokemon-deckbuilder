import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
  form = new FormGroup({
    term: new FormControl('', Validators.required)
  });
  @Input() inputLabel = 'Insira o nome da carta...';
  @Input() isLoading = false;
  @Output() buttonClick = new EventEmitter<any>();

  constructor() {
  }

  submit(event: any) {
    if (!this.isLoading) {
      this.buttonClick.emit(event);
    }
  }
}
