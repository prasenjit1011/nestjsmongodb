import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StateSchema } from './state.schema';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: State.name, schema: StateSchema }])],
  providers: [StateService, StateResolver],
  exports: [StateService]
})
export class StateModule {}
