import { Injectable } from '@angular/core';
import axios, {AxiosInstance} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private _url = 'http://localhost';
  private _axios: AxiosInstance = axios.create({
    baseURL: this._url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
  });

  constructor() {
    this._axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token');
  }

  public async instance(): Promise<AxiosInstance> {
    return this._axios;
  }

  public async xsrfToken() {
    await this._axios.get('/sanctum/csrf-cookie');
  }
}
