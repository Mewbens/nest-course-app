import { Module } from '@nestjs/common';
import { MmController } from './mm.controller';
import { MmService } from './mm.service';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  imports: [UtilityModule],
  controllers: [MmController],
  providers: [MmService],
})
export class MmModule {}
