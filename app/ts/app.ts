import { provide, Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_DIRECTIVES,
         ROUTER_PROVIDERS,
         RouteConfig
} from 'angular2/router';
import { LocationStrategy,
         HashLocationStrategy
} from 'angular2/platform/common';
import { HomeComponent } from './components/HomeComponent';
import { ContactComponent } from './components/ContactComponent';
import { AboutComponent } from './components/AboutComponent';
import { LoginComponent } from './components/LoginComponent';
import { ProtectedComponent } from './components/ProtectedComponent';
import { AUTH_PROVIDERS } from './services/AuthService';

@Component({
    selector: 'router-app',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    template: `
    <div>
        <nav>
            <a>Navigation:</a>
            <ul>
                <li><a [routerLink]="['/Home']">Home</a></li>
                <li><a [routerLink]="['/About']">About</a></li>
                <li><a [routerLink]="['/Contact']>Contact</a></li>
                <li><a [routerLink]="['/Protected']>Protected</a></li>
            </ul>
        </nav>
        
        <login></login>
        
        <hr>
        
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
    { path: '/protected', name: 'Protected', component: ProtectedComponent },
])
class RouterApp {
}

bootstrap(RouterApp, [
    ROUTER_PROVIDERS,
    AUTH_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
