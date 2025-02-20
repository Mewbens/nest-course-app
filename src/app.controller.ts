/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilityService } from './shared/utility/utility.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly utilityService: UtilityService
  ) {}


}