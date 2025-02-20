/* eslint-disable prettier/prettier */
import { Controller,Get, Post } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('mm')
export class MmController {
    constructor(private readonly utilityService: UtilityService){}

    @Get('/shared')
    sharemm(){
        return this.utilityService.sharedFunc();
    }
}
