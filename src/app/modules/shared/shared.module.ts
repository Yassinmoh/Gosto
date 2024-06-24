import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniHeaderComponent } from './components/mini-header/mini-header.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MiniHeaderComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSwitcherComponent
  ],
  exports:[
    MiniHeaderComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSwitcherComponent
  ]
})
export class SharedModule { }
