import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { ListShelterComponent } from './BackOffice/list-shelter/list-shelter.component';
import { AjoutShelterComponent } from './BackOffice/ajout-shelter/ajout-shelter.component';
import { UpdateShelterComponent } from './BackOffice/update-shelter/update-shelter.component';
import { AfficheSheltersFrontComponent } from './FrontOffice/affiche-shelters-front/affiche-shelters-front.component';
import { AjoutAideComponent } from './BackOffice/ajout-aide/ajout-aide.component';
import { ListAideComponent } from './BackOffice/list-aide/list-aide.component';
import { UpdateAideComponent } from './BackOffice/update-aide/update-aide.component';
import { AjoutServiceShelterComponent } from './BackOffice/ajout-service-shelter/ajout-service-shelter.component';
import { ListServiceShelterComponent } from './BackOffice/list-service-shelter/list-service-shelter.component';
import { UpdateServiceShelterComponent } from './BackOffice/update-service-shelter/update-service-shelter.component';
import { AjoutAideDonateurComponent } from './FrontOffice/ajout-aide-donateur/ajout-aide-donateur.component';
import { ListDonateurAvecAideComponent } from './BackOffice/list-donateur-avec-aide/list-donateur-avec-aide.component';
import { AjoutAndAffectServiceToShelterComponent } from './BackOffice/ajout-and-affect-service-to-shelter/ajout-and-affect-service-to-shelter.component';
import { AfficheCauseComponent } from './FrontOffice/affiche-cause/affiche-cause.component';
import { AddCauseShelterComponent } from './BackOffice/add-cause-shelter/add-cause-shelter.component';
import { AfficheCauseBackComponent } from './BackOffice/affiche-cause-back/affiche-cause-back.component';
import { UpdateCauseComponent } from './BackOffice/update-cause/update-cause.component';

const routes: Routes = [
 { path:"",
  component:AllTempleteFrontComponent,
  children:[
    {
      path:"",
      component:HomeFrontComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"etablissment",
      component:AfficheEtablissmentFrontComponent
    },
    {
      path:"shelters",
      component:AfficheSheltersFrontComponent
    },
     {path: 'ajoutDonateurEtAide',component: AjoutAideDonateurComponent},
     {path: 'cause',component: AfficheCauseComponent},

  ]
 },

{
  path:"admin",
  component:AllTemplateBackComponent,
  children:[
    {
      path:"listeEtablissement",
      component:ListeetablissementComponent
    },
    {
      path:"ajouterEtablissement",
      component:AjouterEtablissementComponent
    },
    {
      path:"modifierEtablissement/:id",
      component:ModifieretablissementComponent
    },
    {path: 'listShelter',component: ListShelterComponent},
    {path: 'ajoutShelter',component : AjoutShelterComponent},
    {path: 'editShelter/:id',component: UpdateShelterComponent},

    {path: 'ajoutAide',component : AjoutAideComponent},
    {path: 'listAide',component: ListAideComponent},
    {path: 'editAide/:id',component: UpdateAideComponent},

    {path: 'ajoutService',component : AjoutServiceShelterComponent},
    {path: 'ajoutServiceAndAffect',component: AjoutAndAffectServiceToShelterComponent},

    {path: 'listService',component: ListServiceShelterComponent},
    {path: 'editService/:id',component: UpdateServiceShelterComponent},
    {path: 'listDonateurAide',component: ListDonateurAvecAideComponent},
    {path: 'addCause',component: AddCauseShelterComponent},
    {path: 'listCause',component: AfficheCauseBackComponent},
    {path: 'updateCause/:id',component: UpdateCauseComponent},


  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
