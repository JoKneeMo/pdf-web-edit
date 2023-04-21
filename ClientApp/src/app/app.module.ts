import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/components/elements/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { MessageBoxComponent } from './shared/components/modals/message-box/message-box.component';
import { InputBoxComponent } from './shared/components/modals/input-box/input-box.component';
import { AutofocusDirective } from './shared/directives/auto-focus/auto-focus.directive';
import { DirectoryPickerComponent } from './shared/components/modals/directory-picker/directory-picker.component';
import { MergeDocmentComponent } from './shared/components/modals/merge-docment/merge-docment.component';
import { SearchPipe } from './shared/pipes/filter/filter.pipe';
import { ConfigService } from './services/config/config.service';
import { SettingsComponent } from './shared/components/modals/settings/settings.component';
import { TourNgBootstrapModule } from 'ngx-ui-tour-ng-bootstrap';
import { ToolbarButtonComponent } from './shared/components/elements/toolbar-button/toolbar-button.component';
import { ToolbarComponent } from './shared/components/elements/toolbar/toolbar.component';
import { DocumentComponent } from './shared/components/elements/document/document.component';
import { PagesComponent } from './shared/components/elements/pages/pages.component';
import { PageComponent } from './shared/components/elements/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MessageBoxComponent,
    InputBoxComponent,
    AutofocusDirective,
    DirectoryPickerComponent,
    MergeDocmentComponent,
    SearchPipe,
    SettingsComponent,
    ToolbarButtonComponent,
    ToolbarComponent,
    DocumentComponent,
    PagesComponent,
    PageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'input', component: HomeComponent, pathMatch: 'full' },
      { path: 'output', component: HomeComponent, pathMatch: 'full' },
      { path: 'trash', component: HomeComponent, pathMatch: 'full' },
    ]),
    NgbModule,
    DragulaModule.forRoot(),
    TourNgBootstrapModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (appConfigService: ConfigService) => () => appConfigService.loadAppConfig()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
