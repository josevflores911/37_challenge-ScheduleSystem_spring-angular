import { Component, OnInit } from '@angular/core';
import {MessageService, Message} from 'primeng/api';
import { config } from '../../resources/services/config';
import { notificationService } from 'src/app/resources/services/notification.service';

@Component({
  selector: 'rang-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers:[MessageService]
})

export class ToastComponent implements OnInit {
  config = config;
  constructor( private messageSrv: MessageService, private toastSrv: notificationService ) { }

  ngOnInit() {
   //this.messageService.add()
    this.toastSrv.receiveToast.subscribe((toastMessage)=> {
      this.messageSrv.add(toastMessage);
    })
   }

  onReject(){

  }
  onConfirm( ){

  }
}
