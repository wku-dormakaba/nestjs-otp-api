import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class CreateOtpDto {
  @ApiProperty({
    description: 'Number of digits in the OTP. Default 6.',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(4)
  @Max(8)
  @Type(() => Number)
  // @Transform(({value})=>parseInt(value))
  length: number;
}
