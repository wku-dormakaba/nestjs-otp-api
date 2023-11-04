import { Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';

@Injectable()
export class OtpService {
  generate(createOtp: CreateOtpDto): string {
    const { length = 6 } = createOtp;
    const b = Math.pow(10, length + 1);
    return (Math.floor(Math.random() * b) + b).toString().slice(1, length + 1);
  }
}
