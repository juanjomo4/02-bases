import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Función para cargar los personajes del local storage
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  // Crear una señal para almacenar los personajes del local storage
  characters = signal<Character[]>(loadFromLocalStorage());

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8000 },
  // ]);

  addCharacter(character: Character) {
    // Añadir el nuevo personaje a la lista
    this.characters.update((list) => [...list, character]);
  }

  //Grabar en el local storage con un efecto
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
    console.log(
      `Guardando en el local storage ${this.characters().length} personajes`
    );
  });
}
