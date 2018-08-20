import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BhajanComponent } from './bhajan/bhajan.component';
import { BiographyComponent } from './biography/biography.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleInvolvedComponent } from './people-involved/people-involved.component';
import { PublicationComponent } from './publication/publication.component';
import { QuoteComponent } from './quote/quote.component';
import { SaiComponent } from './sai/sai.component';
import { ShankarComponent } from './shankar/shankar.component';
import { StoryComponent } from './story/story.component';
import { TeachingsComponent } from './teachings/teachings.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    BhajanComponent,
    BiographyComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent,
    GalleryComponent,
    NavbarComponent,
    PeopleInvolvedComponent,
    PublicationComponent,
    QuoteComponent,
    SaiComponent,
    ShankarComponent,
    StoryComponent,
    TeachingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
