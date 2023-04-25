export interface Sigup {
    statusCode: number;
    message: string;
    data: UserSignupData;
}

export interface UserSignupData {
    name: string;
    email: string;
    role: string;
    id: string;
}

export interface Login {
    statusCode: number;
    message: string;
    data: UserLoginData;
}


// export interface loginUserData {
//     email: string;
//     pasword: string;
// }

export interface UserLoginData {
    token: string;
    name: string;
    email: string;
    role: string;
}