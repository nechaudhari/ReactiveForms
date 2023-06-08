import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  registrationForm = new FormGroup({
    userName: new FormControl('Neha'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')

    })
  });

  loadAPIData(){
    this.registrationForm.patchValue({
      userName:'Neha',
      password:'test',
      confirmPassword:'test',
      
    });
  }

}
