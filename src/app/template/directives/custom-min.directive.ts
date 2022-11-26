import { Directive, Input } from "@angular/core";
import { Validator, FormControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDiretive,
        multi: true
    }]
})
export class CustomMinDiretive implements Validator{
    @Input() minimo!: number;

    constructor(){
    }

    validate( control: FormControl ){
        const inputValue = control.value;

        return inputValue < this.minimo ? {'custonMin': true} : null;
    }
}
