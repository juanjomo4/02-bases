import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonbball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonbball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperPageComponent {

  //Inyección de dependencias de forma tradicional
  // constructor(public dragonballService: DragonballService) {}

  //Inyección de dependencias con el decorador inject
  public dragonballService = inject(DragonballService);

  
}
