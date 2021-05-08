import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-bot',
  templateUrl: './navbar-bot.component.html',
  styleUrls: ['./navbar-bot.component.scss']
})
export class NavbarBotComponent implements OnInit {

  date: Date = new Date();
  anioActual = this.date.getFullYear();

  constructor() { }

  ngOnInit(): void {

    console.log(this.date);
  }

}
