import { Component, inject } from '@angular/core';
import { MainSliderComponent } from '../../components/main-slider/main-slider.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../../shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'Gosto-home-page',
  standalone: true,
  imports: [MainSliderComponent,LanguageSwitcherComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  translate = inject(TranslateService)

    switchLang(lang: string) {
    this.translate.use(lang);
  }
}
