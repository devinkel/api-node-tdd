import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentsRepository } from "../repositores/in-memory/in-memory-appointments";
import { CreateAppointment } from "./create-appointment"

describe('Criar agendamento', () => {
    it('should be posible to create appointment', () => {
        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)

        const startsAt = new Date()
        const endsAt = new Date()

        endsAt.setDate(endsAt.getDate() + 1)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})