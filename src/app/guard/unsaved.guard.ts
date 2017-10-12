import { ProductComponent } from './../product/product.component';
import { CanDeactivate } from '@angular/router';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
    canDeactivate(component: ProductComponent) {
        return window.confirm('还没有保存，确定要离开么？');
    }
}
