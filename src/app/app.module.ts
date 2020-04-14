import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github/github.component';
import { SearchFormComponent } from './components/search-form/search-form/search-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RepoDisplayComponent } from './components/repo-display/repo-display.component';
import { HoverEffectDirective } from './directives/hover-effect.directive';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    SearchFormComponent,
    NavbarComponent,
    RepoDisplayComponent,
    HoverEffectDirective,
    ToUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
