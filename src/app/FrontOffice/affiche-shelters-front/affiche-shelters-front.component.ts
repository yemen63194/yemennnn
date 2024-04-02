import { Component } from '@angular/core';
import { ShelterService } from 'src/app/services/shelter.service';
import { ServicesModalComponent } from '../services-modal/services-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-affiche-shelters-front',
  templateUrl: './affiche-shelters-front.component.html',
  styleUrls: ['./affiche-shelters-front.component.css']
})
export class AfficheSheltersFrontComponent {
  shelters:any ; 
  constructor(public _shared:ShelterService,public dialog: MatDialog){}

ngOnInit():void {
  this._shared.getAllShelters()
    .subscribe(
      res=>{
        console.log(res);
        this.shelters = res
      },
      err =>{
        console.log(err);
      }
    ); 
  }
  openServicesModal(shelterId: number): void {
    // Récupérer tous les services associés à l'abri spécifié
    this._shared.getShelterById(shelterId).subscribe(
      shelter => {
        // Récupérer les services associés à cet abri
        this._shared.getServicesByShelterId(shelterId).subscribe(
          services => {
            // Ouvrir un pop-up avec les services et les détails du shelter
            const dialogRef = this.dialog.open(ServicesModalComponent, {
              width: '600px',
               data: { shelter: shelter, services: services }
            });
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
}
