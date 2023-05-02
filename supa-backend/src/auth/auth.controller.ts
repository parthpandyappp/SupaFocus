import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Req, Res, UseGuards, Param } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return;
  }

  @Get('/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const user = await this.authService.googleLogin(req);
    const payload = {
      firstName: user.firstName,
      pic: user.picture,
      email: user.email,
      userId: user.userId,
    };
    return res.redirect(
      `${process.env.CLIENT_URL}/${this.jwtService.sign(payload)}`,
    );
  }
}
