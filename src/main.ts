import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend URL
    credentials: true, // If you need to send cookies
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  });

  await app.listen(3000);
}
bootstrap();
