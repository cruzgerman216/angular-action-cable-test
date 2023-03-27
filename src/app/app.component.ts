import { Component, OnInit } from '@angular/core';
import { ActionCableService } from './actioncable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message;

  constructor(private actionCableService: ActionCableService) {}

  ngOnInit() {
    const subscription = this.actionCableService.subscribe('MessagesChannel', {
      received: (data) => {
        console.log('THIS IS THE DATA', data);
        this.message = data.message;
      },
    });
  }
}
