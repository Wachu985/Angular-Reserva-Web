import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { provideErrorTailorConfig } from '@ngneat/error-tailor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { Page_not_foundComponent } from './page_not_found/page_not_found.component';
import { ListacompraComponent } from './listacompra/listacompra.component';

@NgModule({
  declarations: [										
    AppComponent,
      DashboardComponent,
      FooterComponent,
      HeaderComponent,
      ReservaComponent,
      LoginComponent,
      CarritoComponent,
      Page_not_foundComponent,
      ListacompraComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideErrorTailorConfig({
    errors: {
      useValue: {
        required: 'Este Campo es Requerido',
        minlength: ({ requiredLength, actualLength }) => 
                    `Expect ${requiredLength} but got ${actualLength}`,
        invalidAddress: error => `Address isn't valid`
      }
    }
  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
