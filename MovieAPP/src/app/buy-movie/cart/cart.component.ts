import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { CartService } from 'src/app/_services/cart.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  movieDetails: any
  constructor(private CartService: CartService, private modalService: BsModalService) { }
  total: number = 0;
  movies = this.CartService.getItems();
  bsModalRef: BsModalRef;
  ngOnInit(): void {
    this.findSUm(this.movies);

  }

  findSUm(movies) {
    var value = movies
    console.log(value);
    for (let j = 0; j < movies.length; j++) {
      console.log(value[j].price)
      // var total:number=0
      this.total = this.total + value[j].price
      console.log(this.total)
    }
  }
  openDialog(total: number) {
    const config = {
      class: 'modal-dialog-centered modal-sm',
      initialState: {
        total
      }
    }
    this.bsModalRef = this.modalService.show(PaymentModalComponent, config);
  }
}
