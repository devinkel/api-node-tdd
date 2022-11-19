import { expect, describe, it } from "vitest";
import { Customer } from "./customers";

describe('Create Customer', () => {
    it('should do instance of customer', () => {

        const customer = new Customer({
            name: 'Kelvin',
            email: "kelvin@gmail.com",
            password: "#Password1",
            token: '11a65c39baebf9c19ffafc2ab5d74237'
        });


        expect(customer).toBeInstanceOf(Customer)

    });

    it('should do e-mail be valid', () => {
        expect(() => {
            return new Customer({
                name: 'Kelvin',
                email: "kelvin@gmailcom",
                password: "#Password1",
                token: '11a65c39baebf9c19ffafc2ab5d74237'
            })
        }).toThrowError()
    });

    it('should do password be valid', () => {
        expect(() => {
            return new Customer({
                name: 'Kelvin',
                email: "kelvin@gmail.com",
                password: "Password1", //password needs 8characters , 1 number, 1 special character
                token: '11a65c39baebf9c19ffafc2ab5d74237'
            })
        }).toThrowError()
    });

    it('token should be 32 characters', () => {
        expect(() => {
            return new Customer({
                name: 'Kelvin',
                email: "kelvin@gmail.com",
                password: "#Password1",
                token: '11a65c39baebf9c19ffafc2ab5d7423' //31 characters
            })
        }).toThrowError()
    });
})
