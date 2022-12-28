import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BesicInfoComponent } from './besic-info/besic-info.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    BesicInfoComponent,
    SkillsComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
