export function getValidEmail(email: string): boolean {
    const rExp = new RegExp (/^\S+@\S+\.\S+$/)
    return rExp.test(email)
}

export function getValidPassword(password: string): boolean {
    const rExp = new RegExp (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)
    return rExp.test(password)
}

export function getValidToken(token: string): boolean {
    const rExp = new RegExp (/^(?=.{32}$)[a-zA-Z0-9]*[a-zA-Z0-9]*$/)
    return rExp.test(token)
}