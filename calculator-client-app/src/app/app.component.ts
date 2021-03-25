import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  ClearType = ClearType // Clear type enum
  config = null; // Config from json
  results = []; // Previous result list
  hasError = false; // When true, displays error message.
  answerText = "0"; //Variable to store the answer displayed
  baseUrl = ""; // base URL for the application
  displayedColumns: string[] = ['index', 'result']; //Table column configuration
  dataSource: MatTableDataSource<CalculationResults> = new MatTableDataSource(); // Data source for Mat Table
  
  constructor(private httpClient: HttpClient) {
    // Check for previous computations
    this.httpClient.get("assets/config.json").subscribe(data => { // Get json config and set values
      this.config = data;
      this.baseUrl = this.config.baseUrl;
      // this.baseUrl = "http://localhost:3000/"; // When running on localhost
    });
    this.pollForChange();
  }

  /*
  Evaluates the result on press of "=" button.
  */
  calcExpression() {
    try {
      let result = eval(this.answerText);
      this.httpClient.post(this.baseUrl + "calc", { calculation: this.answerText + " = " + result }).subscribe();
      this.answerText = String(result);
    } catch {
      this.hasError = true;
      this.answerText = "0";
    }
  }

  /*
  Append the button value to the display of calculator
  */
  appendToAnswer(val: string) {
    this.hasError = false;
    if (this.answerText == '0') {
      this.answerText = '';
    }
    this.answerText += val;
  }

  /*
  Clear the value in calculator screen
  */
  clear(clearType: ClearType) {
    this.hasError = false;
    if (clearType == ClearType.Clear) {
      this.answerText = "0";
    } else {
      this.answerText = this.answerText.substr(0, this.answerText.length - 1)
      if (this.answerText.length == 0) {
        this.answerText = "0";
      }
    }
  }

  /*
  Check for new values every second
  */
  private pollForChange() {
    interval(1000).subscribe(val => {
      this.httpClient.get<number[]>(this.baseUrl + "listen").subscribe(result => {
        this.results = result;
        this.dataSource.data = this.results;
      });
    })
  }

}

/* Model for calculation result */
export class CalculationResults {
  result: string;
}

/* Clear type enum */
export enum ClearType {
  Clear = 1,
  BackSpace = 2
}