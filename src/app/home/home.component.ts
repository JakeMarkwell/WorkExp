import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RiotApi, Constants, LolApi} from 'twisted'



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatToolbar, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {  
    
  submit(playerName: string){
    const api = new LolApi({key:'RGAPI-737b63e7-9552-4d68-8e3a-a374fdc4cb45'})
    const playerObject = api.Summoner.getByPUUID(playerName, Constants.Regions.EU_WEST)
    console.log(playerObject)
  }
}
