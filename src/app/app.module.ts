import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import { VerticalRotatorComponent, HorizontalRotatorComponent } from './rotator';

@NgModule({
  declarations: [AppComponent, SliderComponent, SlideComponent, HorizontalRotatorComponent, VerticalRotatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
