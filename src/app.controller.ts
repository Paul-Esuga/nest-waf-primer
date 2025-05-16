import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {} {
    return this.appService.getHome();
  }

  @Get("hello")
  @Render('./index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }

  @Get('soma')
  getSoma(): string {
    return "Soma";
  }
  
  @Get("about-us")
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
}
