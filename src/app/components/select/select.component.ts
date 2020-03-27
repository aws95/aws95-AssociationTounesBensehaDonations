import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  myForm : FormGroup
  countries = [{'id':1, 'name':'India'}, {'id':2, 'name': 'USA'}, {'id':3, 'name': 'UK'}];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
      this.myForm = this._fb.group({
          country:''
      });
  }
  
  save() {
      console.log(this.myForm.value);
  }

}
