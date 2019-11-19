import * as mongoose from 'mongoose';

export const SalaryTableSchema = new mongoose.Schema({

},{ collection : 'salary_table' });
export interface Salary extends mongoose.Document {
  _id: string; branch: []; 
}
