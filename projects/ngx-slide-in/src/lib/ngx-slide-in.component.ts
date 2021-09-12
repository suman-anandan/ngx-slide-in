import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-slide-in',
  styleUrls: ['./ngx-slide-in.component.css'],
  template: `
<ng-container>
   <div [@openClose]="isOpen ? size : 'closed'" class="sidenav">
      <!-- Slide Header -->
      <div class="slide-header">
         <ng-content select="angular-slide-header"></ng-content>
      </div>
      <!-- Slide Content -->
      <div class="slide-content">
         <ng-content select="angular-slide-content"></ng-content>
      </div>
      <!-- Slide Footer -->
      <div class="slide-footer">
         <ng-content select="angular-slide-footer"></ng-content>
      </div>
   </div>
   <div [class.my-slide-overlay]="isOpen" [class.display-hide]="!isOpen" (click)="OnOverlayClick()"></div>
</ng-container>
  `,
  animations: [
    trigger('openClose', [
      state('*', style({ width: '0px', opacity: 0.8, })),
      state('small', style({ width: '25%', opacity: 1, })),
      state('medium', style({ width: '50%', opacity: 1, })),
      state('large', style({ width: '75%', opacity: 1, })),
      state('full', style({ width: '100%', opacity: 1, })),
      state('closed', style({ width: '0px', opacity: 0.8, })),
      transition('small => closed', [animate('0.5s')]),
      transition('medium => closed', [animate('0.5s')]),
      transition('large => closed', [animate('0.5s')]),
      transition('full => closed', [animate('0.5s')]),
      transition('closed => *', [animate('0.4s')]),
    ])
  ]
})
export class NgxSlideInComponent implements OnInit {
  @Input('staticDrop') staticDrop: boolean = false;
  @Input('size') size: 'small' | 'medium' | 'large' | 'full' = 'large';
  @Input('openOnLoad') openOnLoad: boolean = false;
  isOpen = false;
  constructor() { }

  ngOnInit() {
    this.isOpen = this.openOnLoad;
  }

  OpenSlide(): void {
    this.isOpen = true;
  }

  CloseSlide(): void {
    this.isOpen = false;
  }

  OnOverlayClick() {
    if (!this.staticDrop) {
      this.CloseSlide();
    }
  }
}
