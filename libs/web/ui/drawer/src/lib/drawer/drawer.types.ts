import {
  ComponentFactoryResolver,
  Injector,
  Type
} from '@angular/core';
import { Observable } from 'rxjs';
import { SyncDialogComponent } from './syncdialog.component';
import { DrawerComponent } from './drawer.component';
import { SyncDrawerComponent } from './syncdrawer.component';

export interface IDrawerOptions {
  drawerContentComponent: Type<any>;
  componentFactoryResolver?: ComponentFactoryResolver;
  injector?: Injector;
  id?: string;
  width?: string;
  zIndex?: number;
  isCover?: boolean;
  clickDoms?: any;
  fullScreen?: boolean; // @deprecated
  data?: any;
  backdropCloseable?: boolean;
  escKeyCloseable?: boolean;
  type: string;
  target?: string;
  onClose?: Function;
  afterOpened?: Function;
  destroyOnHide?: boolean;
  position?: string;
  beforeHidden?: () => boolean | Promise<boolean> | Observable<boolean>;
  bodyScrollable?: boolean;
  showAnimation?: boolean;
}

export interface IDrawerOpenResult {
  drawerInstance: DrawerComponent;
  drawerContentInstance: any;
}

export interface ISyncDrawerOpenResult {
  drawerInstance: SyncDrawerComponent;
  drawerContentInstance: any;
}

export interface ISyncDialogOpenResult {
  drawerInstance: SyncDialogComponent;
  drawerContentInstance: any;
}
