import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { MainBackComponent } from './BackOffice/main-back/main-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FormsModule } from '@angular/forms';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { ListShelterComponent } from './BackOffice/list-shelter/list-shelter.component';
import { AjoutShelterComponent } from './BackOffice/ajout-shelter/ajout-shelter.component';
import { UpdateShelterComponent } from './BackOffice/update-shelter/update-shelter.component';
import { AfficheSheltersFrontComponent } from './FrontOffice/affiche-shelters-front/affiche-shelters-front.component';
import { ListAideComponent } from './BackOffice/list-aide/list-aide.component';
import { AjoutAideComponent } from './BackOffice/ajout-aide/ajout-aide.component';
import { UpdateAideComponent } from './BackOffice/update-aide/update-aide.component';
import { ListServiceShelterComponent } from './BackOffice/list-service-shelter/list-service-shelter.component';
import { AjoutServiceShelterComponent } from './BackOffice/ajout-service-shelter/ajout-service-shelter.component';
import { UpdateServiceShelterComponent } from './BackOffice/update-service-shelter/update-service-shelter.component';
import { AjoutAideDonateurComponent } from './FrontOffice/ajout-aide-donateur/ajout-aide-donateur.component';
import { ListDonateurAvecAideComponent } from './BackOffice/list-donateur-avec-aide/list-donateur-avec-aide.component';
import { AjoutAndAffectServiceToShelterComponent } from './BackOffice/ajout-and-affect-service-to-shelter/ajout-and-affect-service-to-shelter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicesModalComponent } from './FrontOffice/services-modal/services-modal.component';
import { AfficheCauseComponent } from './FrontOffice/affiche-cause/affiche-cause.component';
import { AddCauseShelterComponent } from './BackOffice/add-cause-shelter/add-cause-shelter.component';
import { AfficheCauseBackComponent } from './BackOffice/affiche-cause-back/affiche-cause-back.component';
import { UpdateCauseComponent } from './BackOffice/update-cause/update-cause.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    MainBackComponent,
    SidebarBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    AjouterEtablissementComponent,
    ListeetablissementComponent,
    ModifieretablissementComponent,
    AllTempleteFrontComponent,
    AfficheEtablissmentFrontComponent,
    ListShelterComponent,
    AjoutShelterComponent,
    UpdateShelterComponent,
    AfficheSheltersFrontComponent,
    ListAideComponent,
    AjoutAideComponent,
    UpdateAideComponent,
    ListServiceShelterComponent,
    AjoutServiceShelterComponent,
    UpdateServiceShelterComponent,
    AjoutAideDonateurComponent,
    ListDonateurAvecAideComponent,
    AjoutAndAffectServiceToShelterComponent,
    ServicesModalComponent,
    AfficheCauseComponent,
    AddCauseShelterComponent,
    AfficheCauseBackComponent,
    UpdateCauseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
