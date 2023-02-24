import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: process.env.CLIENT_URL,
    credentials: true,
  });
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
