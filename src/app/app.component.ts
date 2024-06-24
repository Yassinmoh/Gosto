import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Lang } from './modules/core/enums/lang.enum';
import { getAppLang } from './store/App/app.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gosto';
  IsRTL:boolean = false;
  store = inject(Store)
  translate = inject(TranslateService)

  constructor(){
    this.store.select(getAppLang).pipe().subscribe((res: any) => {
      res == Lang.Arabic ? this.IsRTL = true : this.IsRTL = false;
      this.translate.setDefaultLang(res);
      this.translate.use(res);
    });

  }
}
