import { expect, test } from "vitest";
import { getFutureData } from "./get-future-date";

test('increases date with one year', () => {
    const year = new Date().getFullYear()

    expect(getFutureData(`${year}-08-10`).getFullYear()).toEqual(2023)
})