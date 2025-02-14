import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }
  getInfo(): string {
    return 'Hello, I am Benyapa Suntawareerit , 20 years old.';
  }
  getmyJson() {
    return {
      name: 'Benyapa',
      lastname: 'Suntawareerit',
      age: 20,
    };
  }

  getGit(): string {
    return 'Git and GitHub using';
}
}
