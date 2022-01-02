import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get('app.port');
  }
  get env(): string {
    return this.configService.get('app.port');
  }
  get url(): number {
    return Number(this.configService.get('app.port'));
  }
  get port(): number {
    return this.configService.get('app.port');
  }
  get secret_cookie(): string {
    return this.configService.get('app.secret_cookie');
  }
}
