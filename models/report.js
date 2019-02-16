import { Model } from 'radiks';

export default class Report extends Model {
    static className = 'Report'

    static schema = {
        // Offender’s name
        offenderName: {
            type: String,
            decrypted: true,
        },
        // Date
        date: {
            type: Date,
            decrypted: true,
        },
        // Location
        location: {
            type: String,
            decrypted: true,
        },
        // Category of assault
        incidentType: {
            type: String,
            decrypted: true,
        },
        // Elaboration of case => long paragraph
        longDescription: {
            type: String,
            decrypted: true,
        },
        // Checkbox to check if ok to talk to police
        authoritiesOK: {
            type: Boolean,
            decrypted: true,
        },
    }
}