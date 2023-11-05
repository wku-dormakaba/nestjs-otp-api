import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CreateOtpDto } from './dto/create-otp.dto';
import { OtpCreatedEvent } from './events/otp-created.event';

@Injectable()
export class OtpService {
  constructor(private eventEmitter: EventEmitter2) {}
  private readonly logger = new Logger(OtpService.name);
  private otps: OtpCreatedEvent[] = [];

  generate(createOtp: CreateOtpDto): string {
    const { length = 6 } = createOtp;
    const b = Math.pow(10, length + 1);
    const otp = (Math.floor(Math.random() * b) + b)
      .toString()
      .slice(1, length + 1);
    this.eventEmitter.emit('otp.created', { otp, ttl: Date.now() + 60000 });
    return otp;
  }

  @OnEvent('otp.created')
  handleOtpCreated(payload: OtpCreatedEvent) {
    this.logger.log(payload);
    this.otps.push(payload);
    console.log(`Now ${this.otps.length} otps`);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  handleExpiredOtp() {
    const list = this.otps;
    const now = Date.now();
    this.otps = list.filter((o: OtpCreatedEvent) => o.ttl > now);
    this.logger.log(`removed ${list.length - this.otps.length} otps`);
  }
}
