import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
export class BaseAPIDocumentation {
  public builder = new DocumentBuilder();
  public initializeOptions() {
    return this.builder
      .setTitle('JunClass API Server')
      .setDescription('API 정보')
      .setVersion('1.0')
      .setContact('JunClass', 'github', 'cafejun')
      .build();
  }
}
