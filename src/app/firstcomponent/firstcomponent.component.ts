import { Component, OnInit,Input,EventEmitter,Output, } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  // class method
  // selector: '.app-firstcomponent',

  //attribute method
  // selector: '[app-firstcomponent]',

  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  textproperty: String = "Rayyan"
  myclass: String = "text-green"
  hasError: Boolean = false
  italic: Boolean = true
  inputvalue: String = ''
  //synicng model and view / two way binding

  name = 'rayyaan'

  render: Boolean = false

  color:String = "blue"

  fruits:Array<String> = ["apple", "orange", "banana"]

  @Output() childData = new EventEmitter()

  @Input() parentData:String

  //class binding
  messageclasses = {
    'text-green': !this.hasError,
    'text-red': this.hasError,
    'text-italic': this.italic
  }

  date = new Date()

  constructor() { }

  ngOnInit() {
    console.log("the app is running")
    // setTimeout(() => {
    //   this.myclass = "paratwo"
    // }, 3000);

  }

  onclick() {
    if (this.textproperty == "Rayyan Nauman") {
      alert("You are logged in")
    } else {
      this.hasError = true
    }
  }

  oninputchange(inputvalue: String) {
    console.log(inputvalue)
    this.inputvalue = inputvalue
  }

  fireoutputevent(){
    this.childData.emit(this.fruits)
  }




}