import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCustomLoadingComponent } from 'src/app/modals/modal-custom-loading/modal-custom-loading.component';

@Injectable({ providedIn: 'root' })
export class LoadingService {

  private modal?: HTMLIonModalElement;
  private loadingCount = 0;
  private timeoutId?: any;

  constructor(private modalCtrl: ModalController) {}

  async show(message: string = 'Cargando...') {
    this.loadingCount++;

    if (!this.modal) {
      this.modal = await this.modalCtrl.create({
        component: ModalCustomLoadingComponent,
        componentProps: { message },
        cssClass: 'modal-loading',
        backdropDismiss: false,
        showBackdrop: true
      });

      await this.modal.present();

      // Timeout de seguridad
      // this.timeoutId = setTimeout(() => {
      //   this.forceHide();
      // }, 20000);
    }
  }

  async hide() {
    this.loadingCount--;

    if (this.loadingCount <= 0 && this.modal) {
      await this.modal.dismiss();
      this.modal = undefined;
      this.loadingCount = 0;

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
    } else if (this.loadingCount == 0 && !this.modal) {
      this.timeoutId = setTimeout(() => {
        this.forceHide();
      }, 1000);
    }
  }

  private async forceHide() {
    if (this.modal) {
      await this.modal.dismiss();
      this.modal = undefined;
      this.loadingCount = 0;
      this.timeoutId = undefined;
      console.warn('⏳ Loading personalizado cerrado por timeout');
    }
  }
}
