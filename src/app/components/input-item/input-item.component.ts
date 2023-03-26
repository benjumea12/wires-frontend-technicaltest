import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent {
  @Input() name: string = 'name-input';
  @Input() label: string = 'Label Input';
}
