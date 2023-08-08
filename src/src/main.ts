import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import metadata from './metadata';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));

    const config = new DocumentBuilder()
        .setTitle('OpenAPI file')
        .setDescription('API bla bla')
        .setVersion('1.0')
        .addTag('default', '-')
        .build();

    await SwaggerModule.loadPluginMetadata(metadata);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            docExpansion: 'list', // none
        },
    });

    app.useGlobalPipes(
        new ValidationPipe({
            enableDebugMessages: true,
            dismissDefaultMessages: false,
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: false,
        })
    );

    if (process.env.ENABLE_CORS) app.enableCors();

    await app.listen(process.env.PORT || 3001, '0.0.0.0');
}
bootstrap();
