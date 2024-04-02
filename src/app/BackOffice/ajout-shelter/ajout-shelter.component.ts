import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-ajout-shelter',
  templateUrl: './ajout-shelter.component.html',
  styleUrls: ['./ajout-shelter.component.css']
})
export class AjoutShelterComponent {
  constructor(public _shared: ShelterService,private router :Router) {}

  shelter = {
    nomShelter: '',
    capaciteShelter: 0,
    location: '',
    description:'',
    tel:'',
    image:'',
  };


  ajout() {
    this._shared.createNewShelter(this.shelter)
      .subscribe(
        res => {
          this.shelter = {
            nomShelter: '',
            capaciteShelter: 0,
            location: '',
            description:'',
            tel:'',
            image:'',
          };
          this.router.navigate(['/admin/listShelter']);

        },
        err => {
          console.log(err); 
        }
      );
  }

}
