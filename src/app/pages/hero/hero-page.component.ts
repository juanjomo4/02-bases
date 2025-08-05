import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent {

  name = signal('IronMan');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old`;
  }

  changeHero(nameValue: string, ageValue: number) {
    this.name.set(nameValue);
    this.age.set(ageValue);
  }

  changeAge(ageValue: number) {
    this.age.set(ageValue);
  }

  resetForm() {
    this.name.set('IronMan');
    this.age.set(45);
  }

}
