import { Component } from 'angular2/core';
import {
    Router,
    RouterOutlet,
    RouteConfig,
    RouterLink
} from 'angular2/router';
import {MainComponent} from './products/MainComponent';
import {InterestComponent} from '.products/InterestComponent';
import {SpotifyComponent} from '.products/SpotifyComponent';
import {ByIdComponent} from './products/ByIdComponent';

@Component({
    selector: 'products',
    directives: [RouterOutlet, RouterLink],
    template: `
    <h2>Products</h2>

    <div class="navLinks">
        <a [routerLink]="['./Main']">Main</a> |
        <a [routerLink]="['./Interest']">Interest</a> |
        <a [routerLink]="['./Sportify']">Sportify</a> |
        Enter id: <input #id size="6">
        <button (click)="goToProduct(id.value)">Go</button>
    </div>

    <div class="products-area">
        <router-outlet></router-outlet>
    </div>
    `
})
@RouteConfig([
    { path: '/main', name: 'Main', component: MainComponent, useAsDefault: true },
    { path: '/:id', name: 'ById', component: ByIdComponent },
    {path: '/interest', name: 'Interest', component: InterestComponent },
    {path: '/spotify', name: 'Spotify', component: SpotifyComponent },
])
export class ProductsComponent {
    constructor(public router: Router) {
    }
    
    goToProduct(id: string): void {
        this.router.navigate(['./ById', {id: id}]);
    }
}