import { NgModule } from '@angular/core';
import { PortalHeaderComponent } from './portal-header/portal-header';
import { PortalFooterComponent } from './portal-footer/portal-footer';
import { AuthFabComponent } from './auth-fab/auth-fab';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [PortalHeaderComponent,
    PortalFooterComponent,
    AuthFabComponent],
	imports: [IonicModule],
	exports: [PortalHeaderComponent,
    PortalFooterComponent,
    AuthFabComponent]
})
export class ComponentsModule {}
