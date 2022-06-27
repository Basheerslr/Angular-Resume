import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { names } from './forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class loginFormComponent implements OnInit {

  formdata:names;
  Showme:boolean=false;
  

  constructor() {
    this.formdata={
      firstname:"",
      address:"",
      email:"",
      mobile:"",
      Awards:"",
      language:"",
      hobbies:"",
      objective:"",
      university1:"",
      yearofpassing1:"",
      percentage1:"",
      university3:"",
      yearofpassing3:"",
      percentage3:"",
      university4:"",
      yearofpassing4:"",
      percentage4:"",
      
      organization1:"",
      doj1:"",
      dor1:"",
      organization2:"",
      doj2:"",
      dor2:"",
      organization3:"",
      doj3:"",
      dor3:"",
      tech1:"",
      tech2:"",
      tech3:"",
      describe:"",
      declare:"",
      addskills1:"",
      addskills2:"",
      addskills13:""
    }
   }
   

  ngOnInit(): void {
  }
// chan(){
//   // e.preventdefault()
//   console.log(this.formdata);
//   // localStorage.setItem("value",JSON.stringify(this.formdata.firstname ));
//   // var fdata = new FormData(document.getElementById("reg"));
//   window.localStorage.setItem("value" ,"formdata");
//   window.location.href="newform.component.html'";
// }

savedata(){
  console.log(this.formdata);
window.localStorage.setItem("formdata",JSON.stringify(this.formdata));
this.Showme=true;
}
}
