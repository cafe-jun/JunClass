import { IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpRequestDto {
  @IsEmail()
  @ApiProperty({
    example: 'tb25271@gmail.com',
    description: '이메일'
  })
  email: string;
  //
  // @IsNumber()
  // @ApiProperty({
  //   example: 30,
  //   description: '나이'
  // })
  // public age: number;
  @IsString()
  @ApiProperty({
    example: 'test123',
    description: '패스워드'
  })
  password: string;
}
