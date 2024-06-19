import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MiniHeaderComponent } from '../../shared/components/mini-header/mini-header.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from '../../shared/components/user-menu/user-menu.component';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,MiniHeaderComponent,HeaderComponent,FooterComponent,CommonModule,UserMenuComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {


  breakpointObserver:BreakpointObserver = inject(BreakpointObserver);
  isMobile!:boolean;
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => this.isMobile = result.matches);
  }
}
