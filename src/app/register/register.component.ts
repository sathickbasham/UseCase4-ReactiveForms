import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {MustMatch} from './confirm-password'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm:FormGroup;
  Title:string="";
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";
  ConfirmPassword:string="";
  TermsCondition:string="";
  submitted=false;
  @Output() tableDataValues = new EventEmitter<string>();
  emailPattern:string="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  minLength=6;
  constructor(private fb:FormBuilder) { 
    this.angForm=this.fb.group({
      Title:['',Validators.required],
      FirstName:['', Validators.required],
      LastName:['', Validators.required],
      Email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
      Password:['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword:['', [Validators.required, Validators.minLength(this.minLength)]],
      TermsCondition:['', Validators.required]
    },
    {
      validator:MustMatch('Password','ConfirmPassword')
    });
  }

  ngOnInit(): void {
  }
  SubmitForm(registerForm:NgForm) {
    this.tableDataValues.emit(registerForm.value);
}

}

