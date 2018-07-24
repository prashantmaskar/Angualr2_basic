import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = "server not created";
servers = ['server1', 'server2'];
serverName = "fgfg ";
serverCreated = false;
  constructor() {
setTimeout(() => {
	
	this.allowNewServer = true;
}, 2000); 

   }

  ngOnInit() {
  }

onservercreated(){
  this.serverCreated = true;
  this.servers.push(this.serverName);
	this.serverCreationStatus = 'server was created' + this.serverName;
}

onEerverUpdate(event: Event){
	this.serverName = (<HTMLInputElement>event.target).value;
}

}
