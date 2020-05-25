import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';



@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {

  ticket:string;

  constructor(private socketService: SocketService) {


  }

  ngOnInit() {

    this.socketService.escuchar('estadoActual').subscribe(respuesta => {
      console.log('Estado Actual ',respuesta);
      this.ticket = respuesta['actual'];
    });

  }

  crearTicket()
  {
    this.socketService.emitir('nuevoTicket', null).subscribe((respuesta:string) => {
      this.ticket = respuesta;
    });
  }

}
