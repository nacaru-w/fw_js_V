import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NameArticleValidator(control: AbstractControl): Promise<ValidationErrors | null> | null {
    return new Promise(resolve => {
        const errorNames = ['prueba', 'test', 'mock', 'fake'];
        const input = control.value.toLowerCase();

        if (errorNames.includes(input)) {
            resolve({ errorName: true });
        }

        resolve(null);
    })
}