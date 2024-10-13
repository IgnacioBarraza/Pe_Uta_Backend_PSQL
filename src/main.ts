import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Replace with your frontend URL
    credentials: true, // If you need to send cookies
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); // '0.0.0.0' ensures the app listens on all network interfaces
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
