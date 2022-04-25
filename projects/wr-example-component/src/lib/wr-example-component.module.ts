import { ModuleWithProviders, NgModule } from '@angular/core';
import { WrExampleComponentService } from './services/wr-example-component.service';
import { WrExampleComponentComponent } from './wr-example-component.component';

@NgModule({
  declarations: [WrExampleComponentComponent],
  imports: [],
  providers: [WrExampleComponentService],
  exports: [WrExampleComponentComponent],
})
export class WrExampleComponentModule {
  static configEnvWrExampleComponent(
    receivedEnv: any
  ): ModuleWithProviders<any> {
    return {
      ngModule: WrExampleComponentComponent,
      providers: [
        WrExampleComponentService,
        {
          provide: 'env',
          useValue: receivedEnv,
        },
      ],
    };
  }
}
