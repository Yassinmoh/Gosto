import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Gosto-banner-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent {
  @Input() item: any = {}
  @Input() type: string = ''
}
