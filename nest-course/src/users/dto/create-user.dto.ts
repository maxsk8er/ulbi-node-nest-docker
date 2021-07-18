import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {

	@ApiProperty({ example: 'user@gmail.com', description: 'Email' })
	@IsString({ message: 'Must be a string' })
	@IsEmail({}, { message: 'Not a valid email' })
	readonly email: string;
	@ApiProperty({ example: '123456', description: 'Password' })
	@IsString({ message: 'Must be a string' })
	@Length(4, 16, { message: 'Must be smaller than 16 and bigger than 4 characters' })
	readonly password: string;
}