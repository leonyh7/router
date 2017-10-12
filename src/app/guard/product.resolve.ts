import { Injectable } from '@angular/core';
import { Product } from './../product/product.component';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private router: Router) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const productId: number = route.params['id'];
        if (productId == 1) {
            return new Product(1, 'iphone8');
        } else {
            console.log(productId);
            this.router.navigate(['/home']);
            return undefined;
        }
    }
}

