import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _dialog: NbDialogService) {}

  watchVideo(): void {
    this._dialog.open(ModalComponent);
  }
}
