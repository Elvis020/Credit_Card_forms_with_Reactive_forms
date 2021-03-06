import { FormControl } from '@angular/forms';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Alternatives
  // showErrors() {
  //   return  this.control.dirty && this.control.touched && this.control.errors
  // }
  // OR
  showErrors() {
    const {dirty, touched, errors} = this.control;
    return  dirty && touched && errors;
  }

}
