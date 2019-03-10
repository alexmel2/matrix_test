import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Repository, RepositoryService } from '../shared/repository.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter();
  readonly searchForm: FormGroup
  constructor(private repositoryService: RepositoryService, fb: FormBuilder) {
    this.searchForm = new FormGroup({ repositoryName: new FormControl },[Validators.minLength(1)]);
 
  }
  onSearch() {
    if (this.searchForm.valid) {

      this.repositoryService.searchEvent.emit(this.searchForm.value);
    }
  }
  ngOnInit() {
  }

}
