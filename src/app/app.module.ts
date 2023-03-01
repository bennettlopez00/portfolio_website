import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './modules/top-bar/top-bar.component';
import { ProfileModalComponent } from './modules/profile-modal/profile-modal.component';
import { TimelineModalComponent } from './modules/timeline-modal/timeline-modal.component';
import { CarouselComponent } from './modules/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProfileModalComponent,
    TimelineModalComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
