import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CardElevationHoverDirective } from './directives/app-card-elevation-hover.directive';

@NgModule({
  declarations: [CardElevationHoverDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, CardElevationHoverDirective],
})
export class SharedModule {}
