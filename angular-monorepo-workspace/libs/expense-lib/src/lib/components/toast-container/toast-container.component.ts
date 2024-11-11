import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'exp-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss'
})
export class ToastContainerComponent {

  constructor(
    public toastService: ToastService
  ) {}

  isTemplate(content: string | TemplateRef<any>): content is TemplateRef<any> {
      return content instanceof TemplateRef;
  }

//   showSuccess() {
//     this.toastService.show('Operation Successful', { classname: 'bg-success' });
// }

// showFailure() {
//     this.toastService.show('Operation Failed', { classname: 'bg-danger' });
// }

// showPending() {
//     this.toastService.show('Pending...', { classname: 'bg-warning' });
// }

// showProcessing() {
//     this.toastService.show('Processing...', { classname: 'bg-info' });
// }

// showWarning() {
//     this.toastService.show('Warning!', { classname: 'bg-primary' });
// }

// showStuck() {
//     this.toastService.show('Process Stuck', { classname: 'bg-secondary' });
// }
}
