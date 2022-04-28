import { Component } from '@angular/core';
import { GameEngineLibService } from '../../../game-engine-lib/src/lib/services/game-engine-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';
  constructor( private engineService: GameEngineLibService) {
    console.info(engineService.testing);
  }
}
