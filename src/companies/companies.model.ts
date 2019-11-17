import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  branch: { type: String, required: true }
},{ collection : 'companies' });
export interface Company extends mongoose.Document {
  _id: string; name: string; branch: string;
}
