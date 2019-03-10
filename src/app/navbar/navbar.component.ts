import { Component, OnInit } from '@angular/core';
import { BookMarkService } from '../shared/book-mark.service';

@Component({
  selector: 'nga-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  
  constructor(private bookMarkService:BookMarkService ) { }
  emitEvant()
  {
    console.log("emitEvant")
  this.bookMarkService.BookMarksEvent.emit();
  }
  ngOnInit() {
  }

}
