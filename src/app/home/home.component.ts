import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/repository.service';
import { BookMarkService } from '../shared/book-mark.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listRepository=[];
  constructor(private repositoryService:RepositoryService, private bookMarkService:BookMarkService) 
  {
    this.listRepository= bookMarkService.getAllBookMarkRepository();
    this.bookMarkService.BookMarksEvent.subscribe(
      params => {this.listRepository=bookMarkService.getAllBookMarkRepository()}


    )
    this.repositoryService.searchEvent
    .subscribe(
    params => {
      console.log("home components")
      this.repositoryService.search(params).subscribe((data) => {
        this.listRepository= data['items'].map(t=>
           ({id:t.id,
            name:t.name,
            avatar_url:t.owner.avatar_url,
            isBookmark:this.bookMarkService.listRepository.find(x=> x.id ==t.id)?true:false})
           
            )
            console.log("listRepository",this.listRepository)
      } )
    },
    console.error.bind(console),
    () => console.log('DONE')
    );
   
   }

  ngOnInit() {
  }
}
