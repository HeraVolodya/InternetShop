import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, producer: string): any {
    const result: any = [];
    if(!value || producer === ''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[producer].trim().toLowerCase().include(filterString.toLocaleLowerCase())){
        result.push(a)
      }
    })
  }

}
