import TUser from './tuser';

export class User implements TUser {
  private _id: number | undefined;
  private _name: string = '';
  private _email: string = '';
  private _cpf: string | undefined;
  private _phone: string | undefined;
  private _password: string = '';

  get id(): number | undefined {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get phone(): string | undefined {
    return this._phone;
  }
  get cpf(): string | undefined {
    return this._cpf;
  }
  get password() {
    return this._password;
  }

  set name(value: string) {
    this._name = value;
  }
  set email(value: string) {
    this._email = value;
  }
  set phone(value: string) {
    this._phone = value;
  }
  set cpf(value: string) {
    this._cpf = value;
  }
  set password(value: string) {
    this._password = value;
  }

  toJson() {
    return {
      name: this._name,
      email: this._email,
      phone: this._phone,
      cpf: this._cpf,
      password: this._password,
    }
  }
}
