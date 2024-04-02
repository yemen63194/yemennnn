import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-update-shelter',
  templateUrl: './update-shelter.component.html',
  styleUrls: ['./update-shelter.component.css']
})
export class UpdateShelterComponent {
  shelter:any ;
  id :any;
  constructor(private act : ActivatedRoute , private _shared : ShelterService, private router :Router){
  
  }
  update(){
    this._shared.updateShelter(this.shelter)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/listShelter']);
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit():void {
    this.id = this.act.snapshot.paramMap.get('id');
  
    this._shared.getShelterById(this.id)
    .subscribe(
      res => {
        this.shelter = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
