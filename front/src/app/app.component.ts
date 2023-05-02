import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'synapse_os';
  products:any;
  
  constructor(private http: HttpClient){
    this.getProducts()
  }

  getProducts() {
    this.http.get('http://localhost:9901/synapse_os/instituicao').subscribe((response:any) => {
      console.log(response)
      this.products = response
    })
  }
}
