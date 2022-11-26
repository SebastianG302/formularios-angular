import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { CustomMinDiretive } from './directives/custom-min.directive';



@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent,
    DinamicosComponent,
    CustomMinDiretive
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
    
  ]
})
export class TemplateModule { }
