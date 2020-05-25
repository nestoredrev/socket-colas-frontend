import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-pantalla-colas',
  templateUrl: './pantalla-colas.component.html',
  styleUrls: ['./pantalla-colas.component.css']
})
export class PantallaColasComponent implements OnInit {

  tickets:any;
  ticketActual:any;

  constructor(private socketService: SocketService) {

    this.socketService.escuchar('estadoActual').subscribe((respuesta:any) => {

      this.ticketActual = respuesta.ultimos4.shift();
      this.tickets = respuesta.ultimos4;
      let audio = new Audio('/assets/audio/new-ticket.mp3');
      audio.play();
    });
  }

  ngOnInit() {
    
  }

}
