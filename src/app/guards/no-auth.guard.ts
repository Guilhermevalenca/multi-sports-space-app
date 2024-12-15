import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivateChild {
  constructor(private readonly userService: UserService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.userService.updateLocalUserData()
      .then(() => !this.userService.user?.id)
      .catch(() => true);
  }
}
