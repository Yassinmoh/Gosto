import { Component, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Lang } from './modules/core/enums/lang.enum';
import { getAppLang, modalOpenStatus } from './store/App/app.selectors';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  _store = inject(Store);
  _translate = inject(TranslateService);
  _renderer = inject(Renderer2);

  IsRTL: boolean = false;
  isModalOpen$: Observable<boolean> = of(false);

  constructor() {
    this._store.select(getAppLang).pipe().subscribe((res: any) => {
      res == Lang.Arabic ? this.IsRTL = true : this.IsRTL = false;
      this._translate.setDefaultLang(res);
      this._translate.use(res);
    });
    this.isModalOpen$ = this._store.select(modalOpenStatus).pipe(
      tap(res => {
        if (!res) {
          this._renderer.removeClass(document.body, 'overflow-h')
        } else {
          this._renderer.addClass(document.body, 'overflow-h')
        }
      })
    )
  }
}
