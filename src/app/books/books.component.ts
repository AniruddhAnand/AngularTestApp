import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name: string = 'Book';
  author: string = 'Aniruddh';
  publisher: string = 'Loser Akshara';
  src: string =
    'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop';
  data: string = '';

  constructor() {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //grabData();
  }

  async handleClick(): Promise<void> {
      axios.get('https://4k50z04e9h.execute-api.us-east-1.amazonaws.com/cars')
    .then(response => {
      console.log(response.data);
      this.data = response.data;
    }, error => {
      console.log(error);
    });
  }
}
