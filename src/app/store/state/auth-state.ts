import { UserLoginData } from "src/app/shared/interfaces/auth"

export interface AuthState {
    user: UserLoginData | null
}
