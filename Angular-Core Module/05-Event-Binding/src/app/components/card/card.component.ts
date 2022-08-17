import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // public incrCounter(): void{
  //   alert(`I am from Incr Counter`);
  // }

    public incrCounter(): void {
    this.count = this.count + 1;
  }

  public decrCounter(): void {
    this.count = this.count - 1 > 0 ? this.count -1 : 0;
  }

}
