import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonbball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonbball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  addCharacter(character: Character) {
    // Añadir el nuevo personaje a la lista
    this.characters.update(list => [...list, character])
  }

}
