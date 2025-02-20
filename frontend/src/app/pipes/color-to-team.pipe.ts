import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorToTeam'
})
export class ColorToTeamPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'red':
        return 'Equipo Rojo';
      case 'blue':
        return ' Equipo Azul';
      default:
        return value
    }
  }

}
