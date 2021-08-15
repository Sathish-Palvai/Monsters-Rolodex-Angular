import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  monsters = [];
  searchFieldVal = '';
  filteredMonsters = [];

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.monsters = users;
        this.filteredMonsters = users;
      });
  }

  handleChange = (val: string) => {
    this.searchFieldVal = val;
    if (this.monsters) {
      this.filteredMonsters = this.monsters.filter((monster: any) =>
        monster.name.toLowerCase().includes(this.searchFieldVal.toLowerCase())
      );
    }
  };
}
