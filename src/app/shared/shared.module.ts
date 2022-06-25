import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabcontainerComponent } from './tabcontainer/tabcontainer.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ModalComponent,
    TabcontainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [
    ModalComponent,
    TabcontainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
  ],
  //providers: [ModalService], //Array of services. Injecting manually
})
export class SharedModule {}
