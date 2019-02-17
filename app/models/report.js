import { Model } from 'radiks';

export default class Report extends Model {
  static className = 'Report';

  static schema = {
    // Offender’s name
    offenderName: {
      type: String,
    },
    // Date
    date: {
      type: String,
    },
    // Location
    location: {
      type: String,
    },
    // Elaboration of case => long paragraph
    longDescription: {
      type: String,
    },
    // Status of report (pending, etc)
    status: {
      type: String,
    },
  };
}
