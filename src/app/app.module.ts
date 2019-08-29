import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { Githubservice } from './Github-service/github-search.service';
import { HttpClientModule } from '@angular/common/http';
import { GitsDetailComponent } from './gits-detail/gits-detail.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingDirective } from './routing.directive';
import { DateCountPipe } from './date-count.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    GitsDetailComponent,
    GitsearchComponent,
    AboutComponent,
    NotFoundComponent,
    RoutingComponent,
    RoutingDirective,
    // Githubservice,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
