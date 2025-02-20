import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  sharedFunc(): string {
    return 'Use shared module';
  }
}
