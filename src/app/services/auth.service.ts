import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logueado: boolean = false;
  rol: string = 'admin';

  constructor(private _toastService: ToastService) {}

  CheckLog() {
    console.log(this.logueado);
    if (this.logueado) {
      this._toastService.dismissAll();
      this._toastService.success('Estás logueado!');
    } else {
      this._toastService.dismissAll();
      this._toastService.warn('Ya no estás logueado.');
    }

    /*
    Swal.fire(
      this.logueado ? 'Estas logueado' : 'No estás logueado',
      '',
      this.logueado ? 'success' : 'warning'
    );*/
  }
}
