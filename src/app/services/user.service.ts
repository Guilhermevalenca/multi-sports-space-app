import {Injectable, signal} from '@angular/core';
import {User} from '../classes/user';
import {AxiosService} from './axios.service';
import {AxiosResponse} from 'axios';
import {data} from 'autoprefixer';
import TUser from '../classes/tuser';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _user = signal<User>(new User());

  constructor(private readonly axiosService: AxiosService) {}

  get user() {
    return this._user();
  }

  async updateLocalUserData() {
    if(localStorage.getItem('token')){
      const axios = await this.axiosService.instance();

      await axios.get('api/user')
        .then(({ data }: {data: Partial<TUser & {id: number}>}) => {
          this.user.id = Number(data.id);
          this.user.name = String(data.name);
          this.user.email = String(data.email);
          this.user.phone = String(data.phone);
          this.user.cpf = String(data.cpf);
        })
    }
  }

  async register(
    user: Partial<{
      name: string | null,
      email: string | null,
      password: string | null,
      password_confirmation: string | null,
    }>
  ): Promise<AxiosResponse> {
    const axios = await this.axiosService.instance();
    return axios.post('api/register', user);
  }

  async login(user: Partial<User>) {

  }

  async logout() {

  }

  async resendEmailVerification() {
    const axios = await this.axiosService.instance();

    return axios.post('api/email/verification-notification')
  }
}
