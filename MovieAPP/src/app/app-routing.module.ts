import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyMovieComponent } from './buy-movie/buy-movie.component';
import { CartComponent } from './buy-movie/cart/cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { BoughtmoviesComponent } from './MyProfile/boughtmovies/boughtmovies.component';
import { ProfilePictureComponent } from './MyProfile/profile-picture/profile-picture.component';
import { SellingMoviesComponent } from './MyProfile/selling-movies/selling-movies.component';
import { UpdateProfileComponent } from './MyProfile/update-profile/update-profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadMovieComponent } from './upload-movie/upload-movie.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [{
  path: '', component: LoginComponent},
{
  path: '',
  runGuardsAndResolvers: 'always',
 // canActivate: [AuthGuard],
  children: [
      
      {path: 'bmovie',component: BuyMovieComponent,canActivate: [AuthGuard] },
      {path: 'umovie',component: UploadMovieComponent,canActivate: [AuthGuard]},
      {path: 'boughtmovies',component: BoughtmoviesComponent,canActivate: [AuthGuard] },
      {path: 'profilepic',component: ProfilePictureComponent,canActivate: [AuthGuard]},
      {path: 'sellingmovies', component: SellingMoviesComponent,canActivate: [AuthGuard]},
      {path: 'update-profile', component: UpdateProfileComponent,canActivate: [AuthGuard]},
      {path: 'contact', component: ContactComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'home', component: HomeComponent},
      {path: 'cart', component: CartComponent}
  ]
}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
