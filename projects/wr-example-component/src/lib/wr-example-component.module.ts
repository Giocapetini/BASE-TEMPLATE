import { ModuleWithProviders, NgModule } from '@angular/core';
import { WrExampleComponentService } from './services/wr-example-component.service';
import { WrExampleComponentComponent } from './wr-example-component.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [WrExampleComponentComponent, TestComponent],
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
