import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spider-Man', 'Hulk', 'Iron Man', 'Thor', 'Hawkeye', 'Black Widow', 'Captain America'];

  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
