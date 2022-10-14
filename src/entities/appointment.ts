export interface AppointmentProps {
    customer: String
    startsAt: Date
    endsAt: Date
}

export class Appointment {
    private props: AppointmentProps

    get customer() {
        return this.props.customer
    }

    get startsAt() {
        return this.props.startsAt
    }

    get endsAt() {
        return this.props.endsAt
    }

    constructor(props: AppointmentProps) {
        const { startsAt, endsAt } = props

        if (endsAt <= startsAt){
            throw new Error('Data inválida')
        }

        this.props = props
    }
}
