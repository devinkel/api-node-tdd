import { getValidEmail, getValidPassword, getValidToken } from "../tests/utils/verify-customer-fields"

export interface CustomerProps {
    name: String,
    email: string,
    password: string,
    token: string
}

export class Customer {
    private props: CustomerProps

    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }

    get token() {
        return this.props.token
    }

    constructor(props: CustomerProps){
        const { email, password, token } = props
        const verifyEmail = getValidEmail(email)
        const verifyPassword = getValidPassword(password)
        const verifyToken = getValidToken(token)

        if(!verifyEmail) throw new Error('Email inválido')
        if(!verifyPassword) throw new Error('Senha inválida')
        if(!verifyToken) throw new Error('Token inválido')

        this.props = props
    }
}