import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {UserService} from '../services/user.service';

export class AuthGuard implements CanActivateChild {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
    ) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.userService.updateLocalUserData()
      .then(() => {
        if(this.userService.user?.id) {
          return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
      })
      .catch(() => {
        this.router.navigate(['/auth/login']);
        return false;
      });
  }
}
