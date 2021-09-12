import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-slide-in',
  styleUrls: ['./ngx-slide-in.component.css'],
  template: `
<ng-container>
   <div [@openClose]="isOpen ? 'open' : 'closed'" class="sidenav">
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
   <div *ngIf="isOpen" class="my-slide-overlay" (click)="OnOverlayClick()"></div>
</ng-container>
  `,
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '75vw',
        opacity: 1,
      })),
      state('closed', style({
        width: '0px',
        opacity: 0.8,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.4s')
      ]),
    ])
  ]
})
export class NgxSlideInComponent implements OnInit {
  @Input('staticDrop') staticDrop: boolean = false;
  @Input('width') width: string = '75vw';
  isOpen = false;
  constructor() { }

  ngOnInit() {

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
