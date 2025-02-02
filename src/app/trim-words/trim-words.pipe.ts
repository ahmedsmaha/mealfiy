import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'trimWords'
})
export class TrimWordsPipe implements PipeTransform {

  transform(value: string, numberOfWords: number): string {
    if (!value) {
      return value;  // If the value is empty, return it as is
    }

    // Split the string into words
    const words = value.split(' ');

    // Remove the first two words and join the rest back into a string
    return words.slice(0, numberOfWords).join(' ');
  }

}
