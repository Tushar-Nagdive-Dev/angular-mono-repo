import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toasts: Toast[] = [];

    show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ textOrTpl, options });
    }

    remove(toast: Toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }

    clear() {
        this.toasts = [];
    }
}
