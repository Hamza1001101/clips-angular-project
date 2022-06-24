import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabcontainerComponent } from './tabcontainer/tabcontainer.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [ModalComponent, TabcontainerComponent, TabComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabcontainerComponent, TabComponent],
  //providers: [ModalService], //Array of services. Injecting manually
})
export class SharedModule {}
