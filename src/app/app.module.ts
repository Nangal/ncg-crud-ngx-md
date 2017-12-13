
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatProgressBarModule, MatRadioModule, MatSidenavModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './adminLayout/admin-layout.component';
import { AppRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { MenuItems } from './admin/admin.menu';
import { SharedModule } from './shared/shared.module';

import 'hammerjs';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

const MAT_MODULE = [
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatProgressBarModule, MatRadioModule, MatSidenavModule, MatSelectModule,
  MatToolbarModule];

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    FlexLayoutModule,
    MAT_MODULE,
    BrowserAnimationsModule
  ],
  exports: [
    MAT_MODULE
  ],
  providers: [MenuItems],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
