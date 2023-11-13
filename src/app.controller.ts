import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Public } from './auth/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('protected')
  @ApiBearerAuth('access-token')
  // @UseGuards(AuthGuard)
  getProtected(): string {
    return 'this returns a protected resource';
  }
}
