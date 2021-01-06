import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChange, 
  OnInit, 
  DoCheck, 
  OnDestroy 
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy{

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  /*constructor:

   Utilizado para crear nuestro componente y ponerlo en interfaz*/

  constructor(){
   console.log('1. constructor'); 
  }
   ///////////////////////////////////////////////////////////////////




  /*ngOnChanges

  Detecta el cambio cada vez que tenemos un input. Cada vez que cambiamos 
  la data podamos detectar esos cambios y ver el estado anterior y el 
  estado nuevo.*/

  ngOnChanges(change){
   console.log('2. ngOnChanges'); 
   console.log(change);
  }
  //////////////////////////////////////////////////////////////////////




   /*ngOnInit

   Se ejecuta una vez y es cuando el componente ya está listo en interfaz 
   gráfica, aquí es buena idea hacer llamadas a componentes como a una REST API*/
   ngOnInit(){
    console.log('3. ngOnInit'); 
   }
   //////////////////////////////////////////////////////////////////////




  /*ngDoCheck

  Detecta cuando los elementos hijos de ese componente también son creados y 
  puestos en interfaz, contiene submétodos.*/
  ngDoCheck(){
   console.log('4. ngDoCheck');
  }
  ///////////////////////////////////////////////////////////////////////



  /*ngOnDestroy

  Detecta cuando el elemento es quitado desde la interfaz.*/
  ngOnDestroy(){
   console.log('5. ngDestroy'); 
  }
  ///////////////////////////////////////////////////////////////////////
  
  

  
  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
