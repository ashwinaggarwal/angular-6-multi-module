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
export class Test1Module {
  constructor() {
    console.log('Test1Module');
  }
 }
