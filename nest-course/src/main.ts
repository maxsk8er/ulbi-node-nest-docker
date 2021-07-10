import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
	const PORT = process.env.PORT || 5000;
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('advancedBackend')
		.setDescription('NestJS, Docker')
		.setVersion('1.0.0')
		.addTag('maxsk8er')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/docs', app, document)

	await app.listen(PORT, () => {
		console.log(`server started on port = ${PORT}`)
	})
}

start()
