import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent, {
 providers: [
 { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
 provideIonicAngular(),
 provideRouter(routes, withPreloading(PreloadAllModules)),
 ],
}).catch(err => console.error(err));