import { Injectable } from '@nestjs/common';

@Injectable()
export class OtpService {
  generate(length: number = 6): string {
    const b = Math.pow(10, length + 1);
    return (Math.floor(Math.random() * b) + b).toString().slice(1, length + 1);
  }
}
