import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false
  serverCreationStatus="No server was creted!"
  serverName=""
  serverCreated=false
  servers=["TestServer", "TestServer2"]

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true
    this.servers.push(this.serverName)
    this.serverCreationStatus="Server was created! Name is "+this.serverName
    this.allowNewServer=false
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value
  }
}
