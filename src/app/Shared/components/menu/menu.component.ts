import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private _collapseMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickMenu(){
    this._collapseMenu = !this.collapseMenu;
  }

  get collapseMenu(){
    return this._collapseMenu
  }



}
