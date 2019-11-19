import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  tz_id: { type: Number, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  manager: { type: Boolean },
  experience: { type: String },
  salary: { type: String } 
},{ collection : 'employees' });
export interface Employee extends mongoose.Document {
  _id: string; first_name: string; last_name: string;
  tz_id: number; role: string;
  company: string; manager: boolean;
  experience: number; salary: number;
}
