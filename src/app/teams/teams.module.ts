import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamsRoutingModule} from './teams-routing.module';
import {TeamListComponent} from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import {TestModule} from '../test/test.module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TestModule
  ],
  declarations: [TeamListComponent, TeamDetailComponent]
})
export class TeamsModule {
  constructor() {
    console.log('TeamsModule');
  }
}
