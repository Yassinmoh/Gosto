import { Component, OnInit, inject } from '@angular/core';
import { AppState } from '../../../../store/App/app.reeducer';
import { Store } from '@ngrx/store';
import * as appActions from '../../../../store/App/app.actions'
import { getAppLang } from '../../../../store/App/app.selectors';
import { environment } from '../../../../../environment/environment';
@Component({
  selector: 'Gosto-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent implements OnInit {
  store = inject(Store<AppState>)
  currentLanguage: string ='';

  ngOnInit(): void {
    this.store.select(getAppLang).subscribe(lang =>{
      if(lang){
        this.currentLanguage = lang;
        localStorage.setItem(environment.Storage.Lang,this.currentLanguage)
      }
    })
  }
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'EN' ? 'AR' : 'EN';
    this.store.dispatch(appActions.setAppLang({lang: this.currentLanguage}));
    localStorage.setItem(environment.Storage.Lang,this.currentLanguage)
  }
}
