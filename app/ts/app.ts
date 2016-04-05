import { provide, Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_DIRECTIVES,
         ROUTER_PROVIDERS,
         LocationStrategy,
         HashLocationStrategy,
         RouteConfig
} from 'angular2/router';
import { HomeComponent } from './components/HomeComponent';
import { ContactComponent } from './components/ContactComponent';
import { AboutComponent } from './components/AboutComponent';

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
class RouterApp {
}

bootstrap(RouterApp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
