/**
 * tieupValidation.js
 * @description :: validate each post and put request as per tieup model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of tieup */
exports.schemaKeys = joi.object({
  tieup_id: joi.number().integer().allow(0),
  organization_name: joi.string().allow(null).allow(''),
  organization_description: joi.string().allow(null).allow(''),
  organization_image: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of tieup for updation */
exports.updateSchemaKeys = joi.object({
  tieup_id: joi.number().integer().allow(0),
  organization_name: joi.string().allow(null).allow(''),
  organization_description: joi.string().allow(null).allow(''),
  organization_image: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of tieup for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      tieup_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      organization_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      organization_description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      organization_image: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      createdAt: joi.any(),
      updatedAt: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
