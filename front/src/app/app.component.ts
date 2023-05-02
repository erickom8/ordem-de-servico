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
  SetorFatec:any;
  SetorSenai: any;
  SetorColegio: any;
  
  constructor(private http: HttpClient){
    this.getProducts() 
    this.getSetorFatec()
    this.getSetorSenai()
    this.getSetorColegio()
    
  }



  getProducts() {
    this.http.get('http://localhost:9901/synapse_os/instituicao').subscribe((response:any) => {
      console.log(response)
      this.products = response
    })
  }

  getSetorFatec() {
    this.http.get('http://localhost:9901/synapse_os/setor/1/instituicao').subscribe((response:any) => {
      console.log(response)
      this.SetorFatec = response 
    })
  }
 

  getSetorSenai() {
    this.http.get('http://localhost:9901/synapse_os/setor/2/instituicao').subscribe((response:any) => {
      console.log(response)
      this.SetorSenai = response 
    })
  }

  getSetorColegio() {
    this.http.get('http://localhost:9901/synapse_os/setor/3/instituicao').subscribe((response:any) => {
      console.log(response)
      this.SetorColegio = response 
    })
  }
 
 

  

}
