import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from 'src/app/apollo/graphql.module';
import { UpdatesComponent } from './components/updates/updates.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UpdatesComponent],
  providers: [UsersService],
  imports: [CommonModule, GraphQLModule],
  exports: [UpdatesComponent],
})
export class UserModule {}
