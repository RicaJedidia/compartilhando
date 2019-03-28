import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { PocComponent } from './componentes/poc/poc.component';
import { PocAsyncComponent } from './componentes/poc-async/poc-async.component';
import { PocTakeComponent } from './componentes/poc-take/poc-take.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until/poc-take-until.component';
import { PocUnsubComponent } from './componentes/poc-unsub/poc-unsub.component';

@NgModule({
  declarations: [
    PocBaseComponent,
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeComponent,
    PocTakeUntilComponent,
    PocUnsubComponent
  ],
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ]
})
export class UnsubscribeRxjsModule { }
