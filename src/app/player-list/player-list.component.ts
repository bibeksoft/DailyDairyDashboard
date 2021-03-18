import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  iSClose:boolean=false;
  isList:boolean=false;
  playerId='001';
  playId:String="PID"+parseInt(this.playerId+1);
  playerName="";
  playerAge:number;
  optionList=[{type:'Select',value:''},{type:'ClassA+',value:'ClassA+'},{type:'ClassA',value:'ClassA'},
  {type:'ClassB',value:'ClassB'},{type:'ClassC',value:'ClassC'}];
  playerCatogry=this.optionList[0].value;
  constructor() {
   }

  ngOnInit() {
  }
  onCloseModel(){
    this.iSClose=!this.iSClose;
  }
  onAddList(){
 // console.log("Player Name Is:" + this.playerName + "Age Is" + this.playerAge + "& Catagory Is"+ this.playerCatogry);
  this.isList=!this.isList;
  }

}
