import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as appActions from '../../../../../store/App/app.actions'
import { fadeInLeft } from '../../../../core/animations';

@Component({
  selector: 'Gosto-menu-popup',
  standalone: true,
  imports: [],
  templateUrl: './menu-popup.component.html',
  styleUrl: './menu-popup.component.scss',
  animations:[fadeInLeft]
})
export class MenuPopupComponent {
  store = inject(Store<AppState>)
  close(){
    this.store.dispatch(appActions.toggleMenuPopup())
  }
}
