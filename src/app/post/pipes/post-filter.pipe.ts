import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {
  // value: gelen data
  // filterText: parametre, aranacak ifade
  // parametre istediğimiz için(zorunlu olarak) ? işaretini kaldırdık.
  transform(value: Post[], filterText: string): Post[] {
    if(!filterText){
      return value;
    }

    else{ // filtereleme;
      return value.filter(p=>p.title.toLocaleLowerCase()
      .indexOf(filterText.toLocaleLowerCase()) !== -1); // İ -> i, I -> ı (localeLoweCase)
    }
  }

}
