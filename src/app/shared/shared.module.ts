import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ObjectKeysTextPipe } from './pipes/object-keys-text.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent, FooterComponent, InfoCardComponent, ObjectKeysTextPipe],
  exports: [
    NavBarComponent,
    InfoCardComponent,
    ObjectKeysTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
