__a. ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?__

* Los formularios dirigidos por plantilla se llaman así porque comienzan a partir de una plantilla, y utilizan _binding_ de datos para obtener los datos que se dirigen y que proceden de los componentes. Permiten, por tanto, conducir la lógica de la aplicación a través de la plantilla. De esta forma, Angular infiere los controles del formulario y su comportamiento basándose en las directivas que se están aplicando. Este tipo de formulario es más sencillo de configurar, y son especialmente útiles en los casos en los que la lógica está fuertemente vinculada a la plantilla. No son ideales, por tanto, en casos en los que se da una coplejidad lógica mayor, ya que complica su mantenimiento a largo plazo, al ser menos flexibles.

* Los formularios reactiva, por otro lado, están programados utilizando un paradigma de programación reactivo. Esto quiere decir que se basa en la programación reactiva, que es programación que lidia con y actúa con flujos de datos asíncronos. En este tipo de formularios, se define el árbol de control de objetos completo en el código del componente, y luego se unen a elementos de control nativos de la plantilla. Como el componene tiene acceso tanto a los controles como al modelo, puede empujar cambios en los controles del formulario y viceversa, reaccionando así a cambios. En general, se trata de una forma de diseño de formularios más específica, en la que se crean y configuran los controles, los grupos y listas del formulario. Se trata de una herramienta más potente y flexible a la hora de lidiar con situaciones más complejas que se usarán en proyectos a gran escala.


__b. ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?__

Ambas se usan en formularios que son _template-driven_, y actúan de la siguiente forma:

* La directiva `ngModel` permite realizar un _binding_ bilateral entre controles del formulario y propiedades de componentes. Se usa en formularios orientados a plantillas. Esto quiere decir que los cambios realizados en el formulario afectan la propiedad del componente y viceversa, lo cual permite sincronizarlos.

* La directiva `ngModelChange` se usa simultáneamente junto con `ngModel` para realizar evaluaciones en los cambios en el valor del formulario, y permite la ejecución de una acción o una función cuando esto ocurre.


__c. ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?__

Se refiere a los estados en los que se puede hallar la _form control_. Son los siguientes:

* _Pristine_: se considera así cuando aún no se ha interactuado con ella, al no haberse sometido a ningún tipo de modificación de su valores. A este tipo se le aplica la clase CSS `ng-pristine`.
* _Dirty_: es el estado que se le aplica cuando el usuario ha interactuado con ella y ha realizado cambios a su _form control_. Se le aplica la clase CSS `ng-dirty`.
* _Touched_: se califica así cuando el usuario ha hecho _focus_ en el control y luego lo ha quitado. Indica que ha habido una interactuación con el control sin modificación de los valores. A este se le aplica la clase CSS `ng-touched`.
* _Untouched_: cuando no se ha dado ningún tipo de interacción.

__d. ¿Qué ventajas aportan los FormGroup en la composición de formularios?__

Se trata de una clase que representa una colección de _form controls_. Se usa en los dos tipos de formularios y son especialmente útiles cuando se necesita trabajr con formularios complejos que tienen _form controls_ que se encuentran agrupadas en cuanto a su lógica.