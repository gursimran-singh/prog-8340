import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'new',
        component: CreateComponent
      },
      {
        path: 'foods/:foodid',
        component: DetailsPageComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
