import { User } from 'src/auth/typeorm';
import { UserDetails } from 'src/auth/utils/Types';

export interface AuthenticationProvider {
  validateUser(details: UserDetails);
  createUser(details: UserDetails);
  findUser(discordId: string): Promise<User | undefined>;
}
