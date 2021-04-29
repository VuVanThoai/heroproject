import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top-nav',
  templateUrl: './menu-top-nav.component.html',
  styleUrls: ['./menu-top-nav.component.scss']
})
export class MenuTopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
  }

}
