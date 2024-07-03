import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import * as appActions from '../../../../store/App/app.actions'
import { fadeInLeft } from '../../../core/animations';

@Component({
  selector: 'Gosto-filter-popup',
  standalone: true,
  imports: [],
  templateUrl: './filter-popup.component.html',
  styleUrl: './filter-popup.component.scss',
  animations:[fadeInLeft]
})
export class FilterPopupComponent {
  store = inject(Store<AppState>)
  close(){
    this.store.dispatch(appActions.toggleFilterPopup())
  }
}
