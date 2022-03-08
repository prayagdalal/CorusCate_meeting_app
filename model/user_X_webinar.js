/**
 * user_X_webinar.js
 * @description :: model of a database collection user_X_webinar
 */

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const mongoosePaginate = require('mongoose-paginate-v2');
let idValidator = require('mongoose-id-validator');
const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: myCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema(
  {

    webinar_id:{
      type:Number,
      unique:false,
      required:false
    },

    webinar_link:{ type:String },

    webinar_date:{ type:Date },

    user_id:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },

    webinar_time:{ type:Date },

    isDeleted:{ type:Boolean },

    isActive:{ type:Boolean },

    createdAt:{ type:Date },

    updatedAt:{ type:Date },

    addedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },

    updatedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt' 
    } 
  }
);
schema.plugin(autoIncrement, {
  inc_field: 'webinar_id',
  id:'user_X_webinar_webinar_id_sequence',
  inc_amount: 1, 
  start_seq: 1,
  prefix: '',
  suffix: '',
  length: 6
});
schema.pre('save', async function (next) {
  this.isDeleted = false;
  this.isActive = true;
  next();
});

schema.pre('insertMany', async function (next, docs) {
  if (docs && docs.length){
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      element.isDeleted = false;
      element.isActive = true;
    }
  }
  next();
});

schema.method('toJSON', function () {
  const {
    _id, __v, ...object 
  } = this.toObject({ virtuals:true });
  object.id = _id;
     
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const user_X_webinar = mongoose.model('user_X_webinar',schema);
module.exports = user_X_webinar;