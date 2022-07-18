import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/_models/movie';
import { AccountService } from 'src/app/_services/account.service';
import { UserManagementServiceService } from 'src/app/_services/user-management-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/_services/cart.service';
const APIKEY = "d6b1bc0a";
const PARAMS = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});
@Component({
  selector: 'app-buy-movie-card',
  templateUrl: './buy-movie-card.component.html',
  styleUrls: ['./buy-movie-card.component.css']
})

export class BuyMovieCardComponent implements OnInit {
  @Input() movie: Movie;
  movieDetails: any;
  pic: string;
  bsModalRef: BsModalRef;
  constructor(private route: ActivatedRoute, private cartService: CartService, public modalService: BsModalService,
    private accService: AccountService, private toastr: ToastrService, private http: HttpClient,
    private umService: UserManagementServiceService) { }

  ngOnInit(): void {
    this.getDetails()
  }
  addToCart(movie: Movie) {
    this.cartService.addToCart(movie);
    this.toastr.success('Movie added to cart!');
  }
  getDetails() {
    var name = this.movie.name;
    this.http.get('http://www.omdbapi.com/?t=' + name + '&apikey=' + APIKEY, { params: PARAMS.set('search', name) })
      .subscribe(data => {
        this.movieDetails = data;
      })
  }
  setDefaultPic() {
    this.pic = "assets/NoImage.png";
  }
  // openModal(movie: Movie) {
  //   const config = {
  //     class: 'modal-dialog-center',
  //     initialState: {
  //       movie
  //     }
  //   }
  //   this.bsModalRef = this.modalService.show(RentMovComponent, config);
  // }
}
