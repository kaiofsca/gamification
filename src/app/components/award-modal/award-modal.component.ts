import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-award-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './award-modal.component.html',
  styleUrl: './award-modal.component.css'
})
export class AwardModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
