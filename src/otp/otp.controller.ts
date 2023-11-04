import { Controller, Post } from '@nestjs/common';

@Controller('otp')
export class OtpController {
  @Post()
  create(): string {
    return '123456';
  }
}
