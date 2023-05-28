__a. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?__

Son elementos esenciales de los formularios reactivos. 

`FormControl` corresponde a la base de cualquier formulario de este tipo, representando cada elemento individual de la plantilla. Se trata del elemento que permite asignar valores iniciales y formas de validación. Estos, por tanto, encapsulan el estado y comportamiento de los _input fields_, _checkboxes_, _radio buttons_ y listas desplegables de selección. Se crean a través de la clase `FormControl` del paquete de `forms` de Angular, y se pueden importar individualmente como un módulo más, o a través del módulo `ReactiveFormsModule`:

```ts
import { FormControl } from '@angular/forms';
```

`FormGroup` permite agrupar diferentes _form controls_ bajo el mismo formulario, ofreciendo la posibilidad de hacer seguimiento a lo introducido en el formulario de forma individual, por ejemplo para obtener todos los resultados de forma simultánea o para comprobar si el formulario, en su globalidad, es válido. Se aplica a través de un atributo que se asocia al elemento del formulario. Realizando esta acción, se puede colocar un atributo `formControlName` en cada _form control_ del formulario en lugar de utilizar `formControl`, aplicando el _binding_ de esta forma.

```html
<form [formGroup]="groupName" (ngSubmit)="onSubmit()"> 
```

`FormBuilder` por su parte, permite la construcción de formularios de una forma menos ompulosa. Permite crear elementos `FormGroup` y `FormControl` sin tener que llamar manualmente cada uno de ellos a través de `new`. 

__b. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.__



__c. ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?__