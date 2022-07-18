import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DASHBOARDComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BoughtmoviesComponent } from './MyProfile/boughtmovies/boughtmovies.component';
import { UpdateProfileComponent } from './MyProfile/update-profile/update-profile.component';
import { ProfilePictureComponent } from './MyProfile/profile-picture/profile-picture.component';
import { SellingMoviesComponent } from './MyProfile/selling-movies/selling-movies.component';
import { RegisterComponent } from './register/register.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { UploadMovieComponent } from './upload-movie/upload-movie.component';
import { BuyMovieComponent } from './buy-movie/buy-movie.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { SharedModule } from './_modules/shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './home/carousel/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { BuyMovieCardComponent } from './buy-movie/buy-movie-card/buy-movie-card.component';
import { CartComponent } from './buy-movie/cart/cart.component';
import { CartItemComponent } from './buy-movie/cart/cart-item/cart-item.component';
import { PaymentModalComponent } from './buy-movie/cart/payment-modal/payment-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DASHBOARDComponent,
    BoughtmoviesComponent,
    UpdateProfileComponent,
    ProfilePictureComponent,
    SellingMoviesComponent,
    RegisterComponent,
    ContactFormComponent,
    HomeComponent,
    UploadMovieComponent,
    BuyMovieComponent,
    HasRoleDirective,
    LoginComponent,
    CarouselComponent,
    ContactComponent,
    BuyMovieCardComponent,
    CartComponent,
    CartItemComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
