import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formulario: FormGroup;

  constructor(){
    this.formulario = new FormGroup({
      email:  new FormControl(),
      password:  new FormControl()

    })
  }
   onsubmit(){
 
  }
}
