import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { RouteConfig } from 'angular2/router';

@Component({
    selector: 'router-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div>
        <nav>
            <a>Navigation:</a>
            <ul>
                <li><a [routerLink]="['/Home']">Home</a></li>
                <li><a [routerLink]="['/About']">About</a></li>
                <li><a [routerLink]="['/Contact']">Contact us</a></li>
            </ul>
        </nav>
        
        <router-outlet></router-outlet>
    </div>
    `
})
@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['/Home'] },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
])
