import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {
  Animal,
  AnimalRestService,
} from './shared/services/animal-rest/animal-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public animals: Animal[] = [];

  constructor(private _animalRestService: AnimalRestService) {}

  ngOnInit(): void {
    this._animalRestService
      .getAnimals()
      .subscribe((animals) => (this.animals = animals));
  }

  drop(event: CdkDragDrop<Animal[]>) {
    moveItemInArray(this.animals, event.previousIndex, event.currentIndex);
  }
}
