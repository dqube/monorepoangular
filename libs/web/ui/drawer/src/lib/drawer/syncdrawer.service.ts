import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { OverlayContainerRef } from '../drawer/overlay-container-ref';
import { assign, isUndefined } from 'lodash-es';
import { ISyncDrawerOpenResult, IDrawerOptions } from './drawer.types';
import { SyncDrawerComponent } from './syncdrawer.component';

@Injectable()
export class SyncDrawerService {
  constructor(
    private overlayContainerRef: OverlayContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  open({
    drawerContentComponent,
    injector,
    componentFactoryResolver,
    id,
    zIndex,
    width,
    fullScreen, // @deprecated
    data,
    isCover,
    clickDoms,
    onClose,
    target,
    afterOpened,
    type,
    backdropCloseable,
    escKeyCloseable,
    beforeHidden,
    destroyOnHide = true,
    position = 'right',
    bodyScrollable = true,
    showAnimation = true
  }: IDrawerOptions): ISyncDrawerOpenResult {
    const componentFactoryResolver_ = componentFactoryResolver || this.componentFactoryResolver;
    const drawerRef = this.overlayContainerRef.createComponent(
      componentFactoryResolver_.resolveComponentFactory(SyncDrawerComponent),
      injector
    );
    assign(drawerRef.instance, {
      id,
      width,
      zIndex,
      isCover,
      clickDoms,
      target,
      fullScreen,
      type,
      beforeHidden,
      afterOpened,
      escKeyCloseable,
      position,
      backdropCloseable: isUndefined(backdropCloseable) ? true : backdropCloseable,
      bodyScrollable,
      showAnimation
    });

    const drawerContentRef = drawerRef.instance.drawerContentHost.viewContainerRef.createComponent(
      componentFactoryResolver_.resolveComponentFactory(drawerContentComponent),
      0,
      injector
    );
    assign(drawerContentRef.instance, data);

    drawerRef.instance.onHidden = () => {
      if (onClose) {
        onClose();
      }
      if (destroyOnHide) {
        setTimeout(() => {
          drawerRef.hostView.destroy();
        });
      }
    };

    drawerRef.instance.destroy = () => {
      if (!destroyOnHide && drawerRef.instance.animateState === 'void') {
        drawerRef.hostView.destroy();
      }
    };
    console.log(drawerRef);

    drawerRef.instance.show();
    return {
      drawerInstance: drawerRef.instance,
      drawerContentInstance: drawerContentRef.instance
    };
  }
}
