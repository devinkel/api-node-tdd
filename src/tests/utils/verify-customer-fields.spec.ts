import { expect, test } from "vitest";
import { getValidEmail, getValidPassword, getValidToken } from "./verify-customer-fields";

test('valid e-mail', () => {
    expect(getValidEmail('kelvin@hotmail.com')).toEqual(true)
})

test('8-digit password, 1 special character, 1 uppercase letter', () => {
    expect(getValidPassword('#Password1')).toEqual(true)
})

test('token has 32 characteres', () => {
    expect(getValidToken('11a65c39baebf9c19ffafc2ab5d74237')).toEqual(true)
})