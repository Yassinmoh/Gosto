import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import AOS from 'aos';




@Component({
  selector: 'Gosto-banner-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent implements OnInit {
  @Input() item: any = {}
  @Input() type: string = ''

  ngOnInit(): void {
    AOS.init()
    AOS.refresh();
  }
}
