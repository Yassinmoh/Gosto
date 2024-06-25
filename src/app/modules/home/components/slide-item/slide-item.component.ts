import { Component, Input } from '@angular/core';
import { Slide } from '../../../core/models/Slide';
import { CommonModule } from '@angular/common';
import { fadeInLeft } from '../../../core/animations';

@Component({
  selector: 'Gosto-slide-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-item.component.html',
  styleUrl: './slide-item.component.scss',
  animations:[fadeInLeft]
})
export class SlideItemComponent {

  @Input() slide!:Slide;

}
