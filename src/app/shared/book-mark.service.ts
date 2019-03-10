import { Injectable, EventEmitter } from '@angular/core';
import { Repository } from './repository.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class BookMarkService {
  listRepository=[]
  BookMarksEvent: EventEmitter<void> = new EventEmitter();
  insert(repository:Repository)
  {
   this.listRepository.push(repository)
   localStorage.removeItem("listRepository");
   localStorage.setItem("listRepository", JSON.stringify(this.listRepository));
  }
  update(bookmark:any)
  
  {
   this.listRepository=this.listRepository.filter(bk=> bk.id !==  bookmark.id)
   localStorage.removeItem("listRepository");
   localStorage.setItem("listRepository", JSON.stringify(this.listRepository));
  }
  getAllBookMarkRepository()
  {
    debugger;
    if(localStorage.getItem("listRepository"))
   this.listRepository= JSON.parse(localStorage.getItem("listRepository"))
   else this.listRepository=[];
   return this.listRepository
  }
  constructor() { }
}
