import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestModule} from '../test/test.module';

@NgModule({
  imports: [
    CommonModule,
    TestModule
  ],
  declarations: []
})
export class SharedModule {
  constructor() {
    console.log('SharedModule');
  }
}
