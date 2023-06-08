import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { forbiddenNameValidator } from '../shared/user-name.validator';

@Component({
  selector: 'app-builder-forms',
  templateUrl: './builder-forms.component.html',
  styleUrls: ['./builder-forms.component.css']
})
export class BuilderFormsComponent {
  constructor(private fb: FormBuilder){}

  registrationForm =this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), ]],
    password: ['123'],
    confirmPassword: ['123'],
    address: this.fb.group({
      city: ['Buldana'],
      state: ['Maharashtra'],
      postalCode: ['443001']
    })
  })

  // loadAPIData(){
  //   this.registrationForm.patchValue({
  //     userName:'Neha',
  //     password:'test',
  //     confirmPassword:'test',
      
  //   });
  // }
}
