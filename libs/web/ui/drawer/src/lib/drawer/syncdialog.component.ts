import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import {
  Component, Directive, ElementRef, HostListener, Input, OnDestroy,
  OnInit, Renderer2, ViewChild, ViewContainerRef
} from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { isNumber, parseInt, trim } from 'lodash-es';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[syncDialogContentHost]',
})
export class SyncDialogContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

@Component({
  selector: 'sync-dialog',
  templateUrl: './syncdialog.component.html',
  styleUrls: ['./syncdialog.component.scss'], 
  preserveWhitespaces: false,
})
export class SyncDialogComponent implements OnInit, OnDestroy {
  animateState = 'void';
  @Input() id: string;
  @Input() width = '300px';
  @Input() zIndex: number;
  @Input() isCover = true;
  /*
  @deprecated
  */
  @Input() fullScreen = false;
  @Input() showAnimation = true;
  @ViewChild(SyncDialogContentDirective, { static: true }) drawerContentHost: SyncDialogContentDirective;
  @Input() backdropCloseable: boolean;
  @Input() escKeyCloseable: boolean;
  @Input() beforeHidden: () => boolean | Promise<boolean> | Observable<boolean>;
  @Input() clickDoms: any = [];
  // Will overwrite by drawer service
  @Input() afterOpened: Function;
  @Input() position: 'right' | 'left' = 'left';
  @ViewChild('drawerContainer', { static: true }) drawerContainer: ElementRef;
  _width: string;
  oldWidth: string;
  _isCover: boolean;
  subscription: Subscription;

  animationDone = new Subject<AnimationEvent>();
  animationDoneSub: Subscription;
  resizeSub: Subscription;
  documentOverFlow: boolean;
  scrollTop: number;
  scrollLeft: number;
  @ViewChild('syncdialog', { static: true }) syncdialog: DialogComponent;
  @Input()public type: string;
  @Input()public target: string;
  public onCreated(args: any) {
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  ngOnDestroy(): void {
  // throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }
  onOpened(args: any) {
    this.backdropCloseable =true;
  }
  onClosed(args: any) {
    this.backdropCloseable =false;
  }

  // Will overwrite by drawer service
  onHidden() {

  }

 show() {
   console.log(this.syncdialog);
   this.syncdialog.show();
   

 }
 @HostListener('document:keydown.escape', ['$event']) keydownHandler(event: KeyboardEvent) {
  event.stopPropagation();
  if (this.escKeyCloseable) {
    this.syncdialog.hide();
  }
}
  hide() {
  
  }
  closeClick() {
    this.syncdialog.hide();

  }

  // Will overwrite by drawer service
  destroy() { }

 
}