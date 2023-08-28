import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategaryNavbarComponent } from './components/categary-navbar/categary-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { SingleCatageyComponent } from './components/single-catagey/single-catagey.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { SinglePostCardComponent } from './components/single-post-card/single-post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategaryNavbarComponent,
    HomeComponent,
    SinglePostComponent,
    SingleCatageyComponent,
    SubscriptionComponent,
    CommentComponent,
    CommentListComponent,
    SinglePostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
