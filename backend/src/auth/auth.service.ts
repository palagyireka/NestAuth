import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import ValidateUserInput from './types/validateUser.input'
import { LoginData } from './types/loginData'
import { AuthResult } from './types/authResult'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticateUser(input: ValidateUserInput): Promise<AuthResult> {
    const user = await this.validateUser(input)
    if (!user) {
      throw new UnauthorizedException()
    }

    return this.login(user)
  }

  async validateUser(input: ValidateUserInput): Promise<LoginData | null> {
    const user = await this.usersService.findUserByEmail(input.email)
    if (!user) {
      return null
    }
    const isMatch = await bcrypt.compare(input.password, user.password_secret)

    if (!isMatch) {
      return null
    }
    return {
      userId: user.id,
      email: user.email,
    }
  }

  async login(user: LoginData): Promise<AuthResult> {
    const payload = { sub: user.userId, email: user.email }
    console.log(process.env.JWT_SECRET)
    const accessToken = await this.jwtService.signAsync(payload)
    return {
      accessToken,
      userId: user.userId,
      email: user.email,
    }
  }
}
