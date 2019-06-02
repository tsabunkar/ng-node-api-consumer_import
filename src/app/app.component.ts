import { Component, ViewChild, OnInit } from '@angular/core';
import { controller } from 'bundleproject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('inputId1') inputId1;
  @ViewChild('inputId2') inputId2;
  result;

  ngOnInit() {
    console.log();
    // console.log(controller);
  }

  submit() {
    this.result = controller.addTwoNumb(
      this.inputId1.nativeElement.value,
      this.inputId2.nativeElement.value
    );
    // console.log(this.inputId1.nativeElement.value);

    // this.writeToMyFile(this.inputId.nativeElement.value);
  }
}
