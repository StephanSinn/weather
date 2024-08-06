import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIconLoader]',
  standalone: true,
})
export class IconLoaderDirective implements OnInit {
  private el = inject(ElementRef);
  @Input() appIconLoader: undefined | string = undefined;
  @Input() iconSize: undefined | string = undefined;

  ngOnInit() {
    this.el.nativeElement.title =
      (this.appIconLoader ?? '') + (this.iconSize ?? '');
    this.el.nativeElement.src =
      'https://openweathermap.org/img/wn/' +
      (this.appIconLoader ?? '') +
      '@' +
      (this.iconSize ?? '') +
      'x.png';
  }
}
