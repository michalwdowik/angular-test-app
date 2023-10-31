import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalDataComponent, {
      data: {},
    });
  }
}

@Component({
  selector: 'app-modal-data',
  templateUrl: 'modal-data.component.html',
  standalone: true,
  imports: [MatDialogModule, NgIf],
})
export class ModalDataComponent {}
