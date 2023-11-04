import { Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private otpService: OtpService) {}

  @Get()
  @ApiTags('otp')
  generate(@Query('length', ParseIntPipe) length: number): string {
    return this.otpService.generate(length);
  }
}
