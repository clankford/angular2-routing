import { Component } from 'angular2/core';
import {
    Router,
    RouterOutlet,
    RouteConfig,
    RouterLink
} from 'angular2/router';

@Component({
    selector: 'products',
    directives: [RouterOutlet, RouterLink],
    template: `
    `
})
@RouteConfig([
    
])
export class ProductsComponent {
    constructor(public router: Router) {
    }
}