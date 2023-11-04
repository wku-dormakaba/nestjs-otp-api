import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOtpDto } from './dto/create-otp.dto';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private otpService: OtpService) {}

  @Get()
  @ApiTags('otp')
  // generate(
  //   @Query('length', new DefaultValuePipe(6), ParseIntPipe) length: number,
  // ): string {
  //   return this.otpService.generate(length);
  // }
  // generate(@Query('length', ParseIntPipe) length: number): string {
  // generate(@Query('length', new ValidationPipe()) createOtp: CreateOtpDto): string {
  // @UsePipes(new ValidationPipe({ transform: true }))
  generate(@Query() createOtp: CreateOtpDto): string {
    return this.otpService.generate(createOtp);
  }
}
