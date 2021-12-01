import {HttpClient} from "@angular/common/http";
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-stub';
  result:any;
  constructor(private http:HttpClient) {
  }

  doPost() {
    console.log('do http post !')
    this.http.post('./api/proxy',{id:1,name:'eyal',date:new Date()}).subscribe(
      res => this.result = res,
      error => console.log(error),
    );
  }
}
