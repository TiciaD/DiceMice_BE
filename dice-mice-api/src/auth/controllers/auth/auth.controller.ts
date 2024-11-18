import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, DiscordAuthGuard } from 'src/auth/guards';

@Controller('auth')
export class AuthController {
  /**
   * GET /api/auth/login
   * This is the route the user will visit to authenticate
   */
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  /**
   * GET /api/auth/redirect
   * This is the redirect URL the OAuth2 Provider will call.
   */
  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    // res.redirected('http://localhost:3000/dashboard');
    console.log('redirect response');
    return res.redirect('http://localhost:3001/api/auth/status');
  }

  /**
   * GET /api/auth/status
   * Retrieve the auth status
   */
  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return 'ok';
    // return req.user;
  }
}
