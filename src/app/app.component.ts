import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usecase4-ReactiveForms';
  tableData=[  
    { 
      Title:"Mr", 
    FirstName:"Gururaj",  
    LastName:"Jewargi",  
    Email:"gururaj@gmail.com",
      Password:"1234",
      ConfirmPassword:"1234"
    },  
    {  
      Title:"Mr",
    FirstName:"RAju",  
    LastName:"Jewargi",  
    Email:1478523690,  
    Password:"1234",
    ConfirmPassword:"1234"
    },  
    {  
      Title:"Mr",
    FirstName:"Guru",  
    LastName:"Jewargi",  
    Email:9874563215,  
    Password:"1234",
      ConfirmPassword:"1234"
    }  
    ]  
  submitted(event:any){
    this.tableData.push(event);
  }
}
