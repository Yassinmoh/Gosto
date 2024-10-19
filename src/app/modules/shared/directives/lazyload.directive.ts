import { transition } from '@angular/animations';
import { Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[gostoLazyload]',
  standalone: true
})
export class LazyloadDirective implements OnInit, OnDestroy{

  @Input() gostoLazyload!: string
  @Input() placeholder!: string

  _elementRef = inject(ElementRef)
  _renderer = inject(Renderer2)

  observer!: IntersectionObserver

  ngOnInit(): void {
    this._elementRef.nativeElement.style.opacity='0';
    this._elementRef.nativeElement.style.zIndex='1';
    this._elementRef.nativeElement.style.transition='all 1s ease-out 0.5s';

    this.observer = new IntersectionObserver(entries =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          this.loadImage();
          this.observer.unobserve(this._elementRef.nativeElement)
        }
      })
    })
    this.observer.observe(this._elementRef.nativeElement)
  }

  ngOnDestroy(): void {
    if(this.observer){
      this.observer.disconnect()
    }
  }

  private loadImage(){
    const img = this._renderer.createElement('img')
    img.setAttribute('src',this.gostoLazyload);
    img.addEventListener('load',()=>{
      this._renderer.setProperty(this._elementRef.nativeElement,'src',this.gostoLazyload);
      this._renderer.addClass(this._elementRef.nativeElement,'loaded')
      this._elementRef.nativeElement.style.opacity='1'
      this._elementRef.nativeElement.style.zIndex='1'
    })
    img.addEventListener('error',()=>{
      this._renderer.setProperty(this._elementRef.nativeElement,'src',this.placeholder);
      this._renderer.addClass(this._elementRef.nativeElement,'loaded')
      this._elementRef.nativeElement.style.opacity='1'
      this._elementRef.nativeElement.style.zIndex='1'
    })
  }
}
