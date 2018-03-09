import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
entrylist: any;
  constructor(private Diary: JournalService) { }

  ngOnInit() {
    this.Diary.getDiary()
    .subscribe(r => this.entrylist = r);
  }

}
