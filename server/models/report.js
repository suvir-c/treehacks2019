import { Model } from 'radiks';

export default class Report extends Model {
    static className = 'Report'

    static schema = {
        // Offender’s name
        offenderName: {
            type: String,
        },
        // Date
        date: {
            type: Date,
        },
        // Location
        location: {
            type: String,
        },
        // Category of assault
        incidentType: {
            type: String,
        },
        // Elaboration of case => long paragraph
        longDescription: {
            type: String,
        },
        // Checkbox to check if ok to talk to police
        authoritiesOK: {
            type: Boolean,
        },
    }
}