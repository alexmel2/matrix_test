import { Component, OnInit, Input } from '@angular/core';
import { BookMarkService } from '../shared/book-mark.service';
import { Repository } from '../shared/repository.service';

@Component({
  selector: 'nga-repository-items',
  templateUrl: './repository-items.component.html',
  styleUrls: ['./repository-items.component.css']
})
export class RepositoryItemsComponent  {
  @Input() repository: Repository
  addFavoriteRepository(repository: Repository) {
    repository.isBookmark = !repository.isBookmark;
    if (repository.isBookmark) {
   this.bookMarkService.insert(repository)
    }
    else 
    {
      this.bookMarkService.update(repository)
    }
  }

  constructor(private bookMarkService:BookMarkService) {
   }


}
