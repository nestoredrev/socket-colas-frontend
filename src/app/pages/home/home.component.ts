import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = {
    mesa: null
  };

  escritorio:string;
  ticket:string;

  constructor(private socketService: SocketService ) { }

  ngOnInit() {
  }

  onSubmit(f){

    this.escritorio = this.data.mesa;

    this.socketService.emitir('atenderTicket', this.escritorio ).subscribe(respuesta => {
      
      console.log(respuesta);
      
      if(respuesta['ok'] === false)
      {
        alert(respuesta['message']);
        return;
      }
      else
      {
        this.ticket = respuesta['atenderTicket'].numero;
        this.socketService.escuchar('estadoActual').subscribe();
      }

    });
  }

}
