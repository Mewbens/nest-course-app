import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('showInfo')
  getInfo(): string {
    return this.appService.getInfo();
  }
  @Get('/showmyjson')
  getmyJson() {
    return this.appService.getmyJson();
  }

  @Get('/zxcv')
  getGitandGitHub() {
    return this.appService.getGitandGitHub();
  }
}
