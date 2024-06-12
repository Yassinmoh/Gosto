import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MiniHeaderComponent } from '../../shared/components/mini-header/mini-header.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,MiniHeaderComponent,HeaderComponent,FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
