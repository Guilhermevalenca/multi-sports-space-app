import {UserService} from '../../../services/user.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import TUser from '../../../classes/tuser';
import {Component} from '@angular/core';
import {RegisterModule} from './register.module';
import {z} from 'zod';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RegisterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
})
export class RegisterComponent {
  public user: FormGroup<{
    name: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    password_confirmation: FormControl<string | null>,
  }> = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  });
  public isValidating = {
    name: false,
    email: false,
    password: false,
    form: false,
  }
  public errorMessage: TUser & {form: string} = {
    name: '',
    email: '',
    password: '',
    form: '',
  }

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {
  }

  async submit() {
    const validated = this.validForm();

    if(validated){
      this.user.disable();

      await this.userService.register(this.user.value)
        .then(async (res) => {
          if('token' in res.data) {
            localStorage.setItem('token', res.data.token);

            await this.userService.updateLocalUserData()
              .then(() => {
                this.router.navigate(['/']);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  validName() {
    this.isValidating.name = true;
    if(!this.user.value.name){
      this.errorMessage.name = 'Please complete this field.';
    } else {
      this.errorMessage.name = '';
    }
  }

  validEmail() {
    this.isValidating.email = true;

    if(!this.user.value.email) {
      this.errorMessage.email = 'Please complete this field.';
      return
    }
    const result =  z.string()
      .email()
      .safeParse(this.user.value.email);

    if(result.success) {
      this.errorMessage.email = '';
      return;
    }
    this.errorMessage.email = result.error.errors[0].message;
  }

  validPassword() {
    this.isValidating.password = true;

    if(!this.user.value.password) {
      this.errorMessage.password = 'Please complete this field.';
      return;
    }
    const result = z.string()
      .min(8)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/)
      .safeParse(this.user.value.password);

    if(result.success) {
      this.errorMessage.password = '';
      return;
    }
    this.errorMessage.password = result.error.errors[0].message;
  }

  private validForm() {
    this.validName();
    this.validEmail();
    this.validPassword();

    const valid = this.errorMessage.name === '' && this.errorMessage.email === '' && this.errorMessage.password === '';

    if(!valid) {
      this.errorMessage.form = 'Please ensure all fields are filled out correctly.';
    }
    return valid;
  }

  closeErrorMessageForm() {
    setTimeout(() => {
      this.isValidating.form = false;
    }, 300);
  }
}
