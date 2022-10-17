import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntervalComponent } from './components/interval/interval.component';

const routes: Routes = [];

@NgModule({
  declarations: [IntervalComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class RxjsModule {}
