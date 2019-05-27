import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  formAuto: FormGroup;
  btn = true;
  id: String;
  constructor( private api: ApiService,
    private formBuilder: FormBuilder) {
    this.formAuto = this.formBuilder.group({
      'Modelo': [''],
      'Marca': [''],
      'Transmision': [''],
      'Tipo': [''],
      'Puertas':['']
    });
   }
  autos: any = [];
  ngOnInit() {
    this.api.getAutos().subscribe(response => {
      console.log(response)
      this.autos = response
    });
  }

  getAutos(){
    this.api.getAutos().subscribe(response => {
      console.log(response)
      this.autos = response
    });
  }
  addAuto(){
    this.api.postAuto(this.formAuto.value).subscribe(response=>{
      console.log(response);
      this.getAutos();
    });
    this.formAuto = this.formBuilder.group({
      'Modelo': [''],
      'Marca': [''],
      'Transmision': [''],
      'Tipo': [''],
      'Puertas':['']
    });
  }

  modificarAuto(data: any){
    this.btn=false;
    this.id= data.id;
    this.formAuto = this.formBuilder.group({
      'Modelo': [data.Modelo],
      'Marca': [data.Marca],
      'Transmision': [data.Transmision],
      'Tipo': [data.Tipo],
      'Puertas':[data.Puertas]
    });
  }
  updateAuto(){
    console.log("id: ",this.id)
    this.api.updateAuto(this.formAuto.value,this.id).subscribe(response =>{
      console.log(response);
      this.getAutos();
      this.btn=true;
      this.formAuto = this.formBuilder.group({
        'Modelo': [''],
        'Marca': [''],
        'Transmision': [''],
        'Tipo': [''],
        'Puertas':['']
      });
    })

  }

  deleteAuto(id){
    this.api.deleteAuto(id).subscribe(response =>{
      console.log(response);
      this.getAutos();
    })
  }

}
