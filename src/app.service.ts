import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2() : {} {
    return {title: "Helo App", message : "Hi! How are you?"}
  }
}
