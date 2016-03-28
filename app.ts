@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['/Home'] },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
])
