import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocumentRef } from './document-ref.service';
import { DrawerComponent, DrawerContentDirective } from './drawer.component';
import { DrawerService } from './drawer.service';
import { OverlayContainerRef } from './overlay-container-ref';
import { PortalComponent } from './portal.component';
import { WindowRef } from './window-ref.service';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule  } from '@syncfusion/ej2-angular-popups';
import { SyncDrawerComponent, SyncDrawerContentDirective } from './syncdrawer.component';
import { SyncDrawerService } from './syncdrawer.service';
import { SyncDialogComponent, SyncDialogContentDirective } from './syncdialog.component';
import { SyncDialogService } from './syncdialog.service';

@NgModule({
  imports: [
    CommonModule, 
    ScrollingModule,
    SidebarModule,
    DialogModule 
  ],
  exports : [DrawerComponent, SyncDrawerComponent, SyncDialogComponent],
  declarations: [
    DrawerComponent,
    DrawerContentDirective,
    SyncDialogComponent,
    SyncDialogContentDirective,
    SyncDrawerComponent,
    SyncDrawerContentDirective,
    PortalComponent,
    SyncDrawerComponent
  ],
  providers: [
    DrawerService,
    SyncDrawerService,
    SyncDialogService,
    OverlayContainerRef,
    WindowRef,
    DocumentRef
  ],
})
export class WebUiDrawerModule {}
