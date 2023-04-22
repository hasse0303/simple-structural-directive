import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideLink]'
})

export class HideLinkDirective implements OnChanges{
  @Input('appHideLink') isHide: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    
  }
  ngOnChanges({isHide}: SimpleChanges): void {
    if(isHide) {
      this.hideElement();
    }
  }

  private hideElement() {
    this.isHide ? this.viewContainerRef.clear() : this.viewContainerRef.createEmbeddedView(this.templateRef)
  }
}