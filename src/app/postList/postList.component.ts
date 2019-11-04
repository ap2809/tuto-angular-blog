import { Component, OnInit, Input } from '@angular/core';
import { IPost } from './ipost';

@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss']
})
export class PostListComponent implements OnInit, IPost {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
    this.loveIts=0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  loveIt(){
    this.loveIts++;
  }

  dontLoveIt(){
    this.loveIts--;
  }

  }
