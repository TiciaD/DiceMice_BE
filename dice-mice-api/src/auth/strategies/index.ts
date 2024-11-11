import { Profile, Strategy } from 'passport-discord';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ['identify', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { username, discriminator, id: discordId, avatar } = profile;
    const details = {
      username,
      discriminator,
      discordId,
      avatar,
      accessToken,
      refreshToken,
    };
    console.log('discord info', username, discordId);
    // return this.authService.validateUser(details);
  }
}
