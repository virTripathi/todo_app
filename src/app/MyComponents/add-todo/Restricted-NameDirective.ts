import { AbstractControl, ValidatorFn } from "@angular/forms";

export function TitleValidator(): ValidatorFn
{
    return(control: AbstractControl):{[key: string]:boolean} | null =>{

        if(control.value.trim() == "sam"){
            return {"NotAllowed":true};
        }
        return null;
    }}
