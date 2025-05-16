import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worldy!';
  }

  getHello2() : {} {
    return {title: "Helo App", message : "Hi! How are you?"}
  }

  getAboutUs() : {} {
    return {title: "Helo App", message : "Hi! How are you?"}
  }

  getHome() : {} {
    return {title: "Helo App", message : "Hi! How are you?"}
  }
}
