import { Component, ReflectiveInjector } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthService } from '../services/AuthService';

@Component({
    selector: 'protected',
    template: `
    `
})
export class ProtectedComponent {
    
}