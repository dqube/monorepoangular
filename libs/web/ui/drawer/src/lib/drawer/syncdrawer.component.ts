import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import {
  Component, Directive, ElementRef, HostListener, Input, OnDestroy,
  OnInit, Renderer2, ViewChild, ViewContainerRef
} from '@angular/core';
import { isNumber, parseInt, trim } from 'lodash-es';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Directive({
  selector: '[syncDrawerContentHost]',
})
export class SyncDrawerContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

@Component({
  selector: 'sync-drawer',
  templateUrl: './syncdrawer.component.html',
  styleUrls: ['./syncdrawer.component.scss'],
 
})
export class SyncDrawerComponent implements OnInit, OnDestroy {
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
  @ViewChild(SyncDrawerContentDirective, { static: true }) drawerContentHost: SyncDrawerContentDirective;
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
  @ViewChild('sidebar', { static: true }) sidebar: SidebarComponent;
  @Input()public type: string;
  @Input()public target: string;
  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';
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
   console.log(this.sidebar);
   this.sidebar.show();
   

 }
 @HostListener('document:keydown.escape', ['$event']) keydownHandler(event: KeyboardEvent) {
  event.stopPropagation();
  if (this.escKeyCloseable) {
    this.sidebar.hide();
  }
}
  hide() {
  
  }
  closeClick() {
    this.sidebar.hide();

  }

  // Will overwrite by drawer service
  destroy() { }

 
}
