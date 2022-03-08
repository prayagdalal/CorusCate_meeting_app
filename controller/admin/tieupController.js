/**
 * tieupController.js
 * @description : exports action methods for tieup.
 */

const Tieup = require('../../model/tieup');
const tieupSchemaKey = require('../../utils/validation/tieupValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const ObjectID = require('mongodb').ObjectID;
const utils = require('../../utils/common.js');
   
/**
 * @description : create document of Tieup in mongodb collection.
 * @param {obj} req : request including body for creating document.
 * @param {obj} res : response of created document
 * @return {obj} : created Tieup. {status, message, data}
 */ 
const addTieup = async (req, res) => {
  try {
    let validateRequest = validation.validateParamsWithJoi(
      req.body,
      tieupSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.inValidParam({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    let data = new Tieup({
      ...req.body
      ,addedBy:req.user.id
    });
    let result = await dbService.createDocument(Tieup,data);
    return  res.ok({ data : result });
  } catch (error) {
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    if (error.code && error.code == 11000){
      return res.isDuplicate();
    }
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : find all documents of Tieup from collection based on query and options.
 * @param {obj} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {obj} res : response contains data found from collection.
 * @return {obj} : found Tieup(s). {status, message, data}
 */
const findAllTieup = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      tieupSchemaKey.findFilterKeys,
      Tieup.schema.obj
    );

    if (!validateRequest.isValid) {
      return res.inValidParam({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.query === 'object' && req.body.query !== null) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      let totalRecords = await dbService.countDocument(Tieup, query);
      return res.ok({ data: { totalRecords } });
    }
        
    if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
      options = { ...req.body.options };
    }
    let result = await dbService.getAllDocuments( Tieup,query,options);
    if (result && result.data && result.data.length){
      return res.ok({ data :result });   
    }
    return res.recordNotFound();
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : returns total number of documents of Tieup.
 * @param {obj} req : request including where object to apply filters in req body 
 * @param {obj} res : response that returns total number of documents.
 * @return {obj} : number of documents. {status, message, data}
 */
const getTieupCount = async (req,res) => {
  try {
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      tieupSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.inValidParam({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.where === 'object' && req.body.where !== null) {
      where = { ...req.body.where };
    }
    let result = await dbService.countDocument(Tieup,where);
    result = { totalRecords: result };
    return res.ok({ data : result });
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
   
/**
 * @description : fetch data from database along with aggregation pipelines
 * @param {obj} req : request of aggregation API. ex. pipelines as query.
 * @param {obj} res : response of aggregation API.
 * @return {obj} : response of aggregation. {status, message, data}
 */
const getTieupByAggregate = async (req,res)=>{
  try {
    let result = await dbService.getDocumentByAggregation(Tieup,req.body);
    if (result){
      return res.ok({ data :result });
    }
    return res.recordNotFound();
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
/**
 * @description : deactivate multiple documents of Tieup from table by ids;
 * @param {obj} req : request including array of ids in request body.
 * @param {obj} res : response contains updated documents of Tieup.
 * @return {obj} : number of deactivated documents of Tieup. {status, message, data}
 */
const softDeleteManyTieup = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { _id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    let data = await dbService.bulkUpdate(Tieup,query, updateBody);
    if (!data) {
      return res.recordNotFound();
    }
    return res.ok({ data:data });
        
  } catch (error){
    return res.failureResponse(); 
  }
};
    
/**
 * @description : create multiple documents of Tieup in mongodb collection.
 * @param {obj} req : request including body for creating documents.
 * @param {obj} res : response of created documents.
 * @return {obj} : created Tieups. {status, message, data}
 */
const bulkInsertTieup = async (req,res)=>{
  try {
    if (req.body && (!Array.isArray(req.body.data) || req.body.data.length < 1)) {
      return res.badRequest();
    }
    let data = req.body.data; 
        
    if (req.user.id){
      for (let i = 0;i < data.length;i++){
        data[i].addedBy = req.user.id;
      }
    }
    let result = await dbService.bulkInsert(Tieup,data);
    return  res.ok({ data :result });
  } catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate();
    }
    return res.failureResponse({ data:error.message });
  }
};
   
/**
 * @description : update multiple records of Tieup with data by filter.
 * @param {obj} req : request including filter and data in request body.
 * @param {obj} res : response of updated Tieups.
 * @return {obj} : updated Tieups. {status, message, data}
 */
const bulkUpdateTieup = async (req,res)=>{
  try {
    let filter = {};
    let data;
    if (req.body && typeof req.body.filter === 'object' && req.body.filter !== null) {
      filter = { ...req.body.filter };
    }
    if ( typeof req.body.data === 'object' && req.body.data !== null) {
      data = { ...req.body.data, };
      delete data['addedBy'];
      delete data['updatedBy'];
      data.updatedBy = req.user.id;
      let result = await dbService.bulkUpdate(Tieup,filter,data);
      if (!result){
        return res.recordNotFound();
      }
      return  res.ok({ data :result });
    } else {
      return res.badRequest();
    }
  } catch (error){
    return res.failureResponse({ data:error.message }); 
  }
};
    
/**
 * @description : delete documents of Tieup in table by using ids.
 * @param {obj} req : request including array of ids in request body.
 * @param {obj} res : response contains no of documents deleted.
 * @return {obj} : no of documents deleted. {status, message, data}
 */
const deleteManyTieup = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { '_id':{ '$in':ids } };
    let result = await dbService.deleteMany(Tieup,query);
    return res.ok({ data :result });
  } catch (error){
    return res.failureResponse(); 
  }
};
/**
 * @description : deactivate document of Tieup from table by id;
 * @param {obj} req : request including id in request params.
 * @param {obj} res : response contains updated document of Tieup.
 * @return {obj} : deactivated Tieup. {status, message, data}
 */
const softDeleteTieup = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.findOneAndUpdateDocument(Tieup, query, updateBody,{ new:true });
    if (!result){
      return res.recordNotFound();
    }
    return  res.ok({ data:result });
  } catch (error){
    return res.failureResponse(); 
  }
};
    
/**
 * @description : partially update document of Tieup with data by id;
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Tieup.
 * @return {obj} : updated Tieup. {status, message, data}
 */
const partialUpdateTieup = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = { ...req.body };
    let validateRequest = validation.validateParamsWithJoi(
      data,
      tieupSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.inValidParam({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(Tieup, query, data,{ new:true });
    if (!result) {
      return res.recordNotFound();
    }
    return res.ok({ data:result });
  } catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : update document of Tieup with data by id.
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Tieup.
 * @return {obj} : updated Tieup. {status, message, data}
 */
const updateTieup = async (req,res) => {
  try {
    delete req.body['addedBy'];
    delete req.body['updatedBy'];
    let data = {
      updatedBy:req.user.id,
      ...req.body,
    };
    let validateRequest = validation.validateParamsWithJoi(
      data,
      tieupSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.inValidParam({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    let query = { _id:req.params.id };
    let result = await dbService.findOneAndUpdateDocument(Tieup,query,data,{ new:true });
    if (!result){
      return res.recordNotFound();
    }
    return  res.ok({ data:result });
  } catch (error){
    if (error.name === 'ValidationError'){
      return res.validationError({ message : `Invalid Data, Validation Failed at ${ error.message}` });
    }
    else if (error.code && error.code == 11000){
      return res.isDuplicate();
    }
    return res.failureResponse({ data:error.message });
  }
};
        
/**
 * @description : find document of Tieup from table by id;
 * @param {obj} req : request including id in request params.
 * @param {obj} res : response contains document retrieved from table.
 * @return {obj} : found Tieup. {status, message, data}
 */
const getTieup = async (req,res) => {
  try {
    let query = {};
    if (!ObjectID.isValid(req.params.id)) {
      return res.invalidObjectId();
    }
    query._id = req.params.id;
    let options = {};
    if (req.body && req.body.populate && req.body.populate.length) options.populate = req.body.populate;
    if (req.body && req.body.select) {
      let validateRequest = validation.validateFilterWithJoi(
        req.body,
        tieupSchemaKey.findFilterKeys,
        Tieup.schema.obj
      );
      if (!validateRequest.isValid) {
        return res.inValidParam({ message: `${validateRequest.message}` });
      }
      options.select = utils.getSelectObject(req.body.select);
    }
    let result = await dbService.getSingleDocument(Tieup,query, options);
    if (result){
            
      return  res.ok({ data :result });
    }
    return res.recordNotFound();
  }
  catch (error){
    return res.failureResponse({ data:error.message });
  }
};
    
/**
 * @description : delete document of Tieup from table.
 * @param {obj} req : request including id as req param.
 * @param {obj} res : response contains deleted document.
 * @return {obj} : deleted Tieup. {status, message, data}
 */
const deleteTieup = async (req,res) => {
  try {
    let query = { _id:req.params.id };
    const result = await dbService.findOneAndDeleteDocument(Tieup, query);
    if (result){
      return  res.ok({ data :result });
    }
    return res.recordNotFound();
  }
  catch (error){
    return res.failureResponse();
  }
};

module.exports = {
  addTieup,
  findAllTieup,
  getTieupCount,
  getTieupByAggregate,
  softDeleteManyTieup,
  bulkInsertTieup,
  bulkUpdateTieup,
  deleteManyTieup,
  softDeleteTieup,
  partialUpdateTieup,
  updateTieup,
  getTieup,
  deleteTieup,
};