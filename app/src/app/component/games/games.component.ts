import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public condensed = true;

  constructor(public state: StateService, public player: PlayerService) { }

  ngOnInit() {

  }

}
