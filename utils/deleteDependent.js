/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let Tieup = require('../model/tieup');
let Learn = require('../model/learn');
let Bulletin = require('../model/bulletin');
let User_X_webinar = require('../model/user_X_webinar');
let Meeting = require('../model/meeting');
let Space = require('../model/space');
let Company = require('../model/company');
let User = require('../model/user');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deleteTieup = async (filter) =>{
  try {
    return await Tieup.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteLearn = async (filter) =>{
  try {
    return await Learn.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteBulletin = async (filter) =>{
  try {
    return await Bulletin.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser_X_webinar = async (filter) =>{
  try {
    return await User_X_webinar.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMeeting = async (filter) =>{
  try {
    return await Meeting.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteSpace = async (filter) =>{
  try {
    let space = await Space.find(filter, { _id:1 });
    if (space.length){
      space = space.map((obj) => obj._id);
      const meetingFilter4735 = { 'space_id': { '$in': space } };
      const meeting2851 = await deleteMeeting(meetingFilter4735);
      return await Space.deleteMany(filter);
    } else {
      return 'No space found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCompany = async (filter) =>{
  try {
    let company = await Company.find(filter, { _id:1 });
    if (company.length){
      company = company.map((obj) => obj._id);
      const userFilter0263 = { 'user_company': { '$in': company } };
      const user4460 = await deleteUser(userFilter0263);
      return await Company.deleteMany(filter);
    } else {
      return 'No company found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const tieupFilter3380 = { 'addedBy': { '$in': user } };
      const tieup5123 = await deleteTieup(tieupFilter3380);
      const tieupFilter5951 = { 'updatedBy': { '$in': user } };
      const tieup9498 = await deleteTieup(tieupFilter5951);
      const learnFilter9575 = { 'user_id': { '$in': user } };
      const learn2807 = await deleteLearn(learnFilter9575);
      const learnFilter5007 = { 'addedBy': { '$in': user } };
      const learn4832 = await deleteLearn(learnFilter5007);
      const learnFilter9871 = { 'updatedBy': { '$in': user } };
      const learn1392 = await deleteLearn(learnFilter9871);
      const bulletinFilter3314 = { 'user_id': { '$in': user } };
      const bulletin4357 = await deleteBulletin(bulletinFilter3314);
      const bulletinFilter9224 = { 'addedBy': { '$in': user } };
      const bulletin9932 = await deleteBulletin(bulletinFilter9224);
      const bulletinFilter6947 = { 'updatedBy': { '$in': user } };
      const bulletin9406 = await deleteBulletin(bulletinFilter6947);
      const user_X_webinarFilter8111 = { 'user_id': { '$in': user } };
      const user_X_webinar9703 = await deleteUser_X_webinar(user_X_webinarFilter8111);
      const user_X_webinarFilter1234 = { 'addedBy': { '$in': user } };
      const user_X_webinar2644 = await deleteUser_X_webinar(user_X_webinarFilter1234);
      const user_X_webinarFilter5097 = { 'updatedBy': { '$in': user } };
      const user_X_webinar6365 = await deleteUser_X_webinar(user_X_webinarFilter5097);
      const meetingFilter8734 = { 'user_id': { '$in': user } };
      const meeting7232 = await deleteMeeting(meetingFilter8734);
      const meetingFilter5733 = { 'addedBy': { '$in': user } };
      const meeting6442 = await deleteMeeting(meetingFilter5733);
      const meetingFilter4838 = { 'updatedBy': { '$in': user } };
      const meeting1593 = await deleteMeeting(meetingFilter4838);
      const spaceFilter9264 = { 'addedBy': { '$in': user } };
      const space3923 = await deleteSpace(spaceFilter9264);
      const spaceFilter1551 = { 'updatedBy': { '$in': user } };
      const space2377 = await deleteSpace(spaceFilter1551);
      const companyFilter6661 = { 'addedBy': { '$in': user } };
      const company8296 = await deleteCompany(companyFilter6661);
      const companyFilter0955 = { 'updatedBy': { '$in': user } };
      const company3799 = await deleteCompany(companyFilter0955);
      const userFilter2442 = { 'addedBy': { '$in': user } };
      const user7324 = await deleteUser(userFilter2442);
      const userFilter1615 = { 'updatedBy': { '$in': user } };
      const user5368 = await deleteUser(userFilter1615);
      const userTokensFilter5594 = { 'userId': { '$in': user } };
      const userTokens9944 = await deleteUserTokens(userTokensFilter5594);
      const userRoleFilter2775 = { 'userId': { '$in': user } };
      const userRole2206 = await deleteUserRole(userRoleFilter2775);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    return await UserTokens.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter6979 = { 'roleId': { '$in': role } };
      const routeRole2024 = await deleteRouteRole(routeRoleFilter6979);
      const userRoleFilter6134 = { 'roleId': { '$in': role } };
      const userRole9542 = await deleteUserRole(userRoleFilter6134);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter9223 = { 'routeId': { '$in': projectroute } };
      const routeRole0447 = await deleteRouteRole(routeRoleFilter9223);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countTieup = async (filter) =>{
  try {
        
    const tieupCnt =  await Tieup.countDocuments(filter);
    return { tieup : tieupCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countLearn = async (filter) =>{
  try {
        
    const learnCnt =  await Learn.countDocuments(filter);
    return { learn : learnCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countBulletin = async (filter) =>{
  try {
        
    const bulletinCnt =  await Bulletin.countDocuments(filter);
    return { bulletin : bulletinCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser_X_webinar = async (filter) =>{
  try {
        
    const user_X_webinarCnt =  await User_X_webinar.countDocuments(filter);
    return { user_X_webinar : user_X_webinarCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countMeeting = async (filter) =>{
  try {
        
    const meetingCnt =  await Meeting.countDocuments(filter);
    return { meeting : meetingCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countSpace = async (filter) =>{
  try {
        
    let space = await Space.find(filter, { _id:1 });
    if (space.length){
      space = space.map((obj) => obj._id);

      const meetingFilter = { '$or': [{                    space_id : { '$in' : space } }] };
      const meetingCnt =  await dbService.countDocument(Meeting,meetingFilter);

      let response = { meeting : meetingCnt, };
      return response;
    } else {
      return {  space : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countCompany = async (filter) =>{
  try {
        
    let company = await Company.find(filter, { _id:1 });
    if (company.length){
      company = company.map((obj) => obj._id);

      const userFilter = { '$or': [{                    user_company : { '$in' : company } }] };
      const userCnt =  await dbService.countDocument(User,userFilter);

      let response = { user : userCnt, };
      return response;
    } else {
      return {  company : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
        
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const tieupFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const tieupCnt =  await dbService.countDocument(Tieup,tieupFilter);

      const learnFilter = { '$or': [{                    user_id : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const learnCnt =  await dbService.countDocument(Learn,learnFilter);

      const bulletinFilter = { '$or': [{                    user_id : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const bulletinCnt =  await dbService.countDocument(Bulletin,bulletinFilter);

      const user_X_webinarFilter = { '$or': [{                    user_id : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const user_X_webinarCnt =  await dbService.countDocument(User_X_webinar,user_X_webinarFilter);

      const meetingFilter = { '$or': [{                    user_id : { '$in' : user } },{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const meetingCnt =  await dbService.countDocument(Meeting,meetingFilter);

      const spaceFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const spaceCnt =  await dbService.countDocument(Space,spaceFilter);

      const companyFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const companyCnt =  await dbService.countDocument(Company,companyFilter);

      const userFilter = { '$or': [{                    addedBy : { '$in' : user } },{                    updatedBy : { '$in' : user } }] };
      const userCnt =  await dbService.countDocument(User,userFilter);

      const userTokensFilter = { '$or': [{                    userId : { '$in' : user } }] };
      const userTokensCnt =  await dbService.countDocument(UserTokens,userTokensFilter);

      const userRoleFilter = { '$or': [{                    userId : { '$in' : user } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        tieup : tieupCnt,
        learn : learnCnt,
        bulletin : bulletinCnt,
        user_X_webinar : user_X_webinarCnt,
        meeting : meetingCnt,
        space : spaceCnt,
        company : companyCnt,
        user : userCnt,
        userTokens : userTokensCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
        
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
        
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{                    roleId : { '$in' : role } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{                    roleId : { '$in' : role } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
        
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{                    routeId : { '$in' : projectroute } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
        
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
        
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteTieup = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Tieup.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteLearn = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Learn.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteBulletin = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Bulletin.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser_X_webinar = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await User_X_webinar.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMeeting = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Meeting.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteSpace = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let space = await Space.find(filter, { _id:1 });
    if (space.length){
      space = space.map((obj) => obj._id);
      const meetingFilter5387 = { 'space_id': { '$in': space } };
      const meeting5422 = await softDeleteMeeting(meetingFilter5387, updateBody);
      return await Space.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No space found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCompany = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let company = await Company.find(filter, { _id:1 });
    if (company.length){
      company = company.map((obj) => obj._id);
      const userFilter8132 = { 'user_company': { '$in': company } };
      const user5967 = await softDeleteUser(userFilter8132, updateBody);
      return await Company.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No company found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const tieupFilter8542 = { 'addedBy': { '$in': user } };
      const tieup4738 = await softDeleteTieup(tieupFilter8542, updateBody);
      const tieupFilter5954 = { 'updatedBy': { '$in': user } };
      const tieup8739 = await softDeleteTieup(tieupFilter5954, updateBody);
      const learnFilter2033 = { 'user_id': { '$in': user } };
      const learn4149 = await softDeleteLearn(learnFilter2033, updateBody);
      const learnFilter5993 = { 'addedBy': { '$in': user } };
      const learn6644 = await softDeleteLearn(learnFilter5993, updateBody);
      const learnFilter7258 = { 'updatedBy': { '$in': user } };
      const learn6713 = await softDeleteLearn(learnFilter7258, updateBody);
      const bulletinFilter7845 = { 'user_id': { '$in': user } };
      const bulletin9665 = await softDeleteBulletin(bulletinFilter7845, updateBody);
      const bulletinFilter9246 = { 'addedBy': { '$in': user } };
      const bulletin7499 = await softDeleteBulletin(bulletinFilter9246, updateBody);
      const bulletinFilter3558 = { 'updatedBy': { '$in': user } };
      const bulletin9297 = await softDeleteBulletin(bulletinFilter3558, updateBody);
      const user_X_webinarFilter3078 = { 'user_id': { '$in': user } };
      const user_X_webinar6233 = await softDeleteUser_X_webinar(user_X_webinarFilter3078, updateBody);
      const user_X_webinarFilter4453 = { 'addedBy': { '$in': user } };
      const user_X_webinar7323 = await softDeleteUser_X_webinar(user_X_webinarFilter4453, updateBody);
      const user_X_webinarFilter9685 = { 'updatedBy': { '$in': user } };
      const user_X_webinar9767 = await softDeleteUser_X_webinar(user_X_webinarFilter9685, updateBody);
      const meetingFilter9274 = { 'user_id': { '$in': user } };
      const meeting0920 = await softDeleteMeeting(meetingFilter9274, updateBody);
      const meetingFilter8333 = { 'addedBy': { '$in': user } };
      const meeting8555 = await softDeleteMeeting(meetingFilter8333, updateBody);
      const meetingFilter2186 = { 'updatedBy': { '$in': user } };
      const meeting0217 = await softDeleteMeeting(meetingFilter2186, updateBody);
      const spaceFilter2481 = { 'addedBy': { '$in': user } };
      const space8999 = await softDeleteSpace(spaceFilter2481, updateBody);
      const spaceFilter3401 = { 'updatedBy': { '$in': user } };
      const space7477 = await softDeleteSpace(spaceFilter3401, updateBody);
      const companyFilter5334 = { 'addedBy': { '$in': user } };
      const company9515 = await softDeleteCompany(companyFilter5334, updateBody);
      const companyFilter0080 = { 'updatedBy': { '$in': user } };
      const company3293 = await softDeleteCompany(companyFilter0080, updateBody);
      const userFilter7281 = { 'addedBy': { '$in': user } };
      const user0539 = await softDeleteUser(userFilter7281, updateBody);
      const userFilter4552 = { 'updatedBy': { '$in': user } };
      const user3635 = await softDeleteUser(userFilter4552, updateBody);
      const userTokensFilter3465 = { 'userId': { '$in': user } };
      const userTokens1276 = await softDeleteUserTokens(userTokensFilter3465, updateBody);
      const userRoleFilter3335 = { 'userId': { '$in': user } };
      const userRole3098 = await softDeleteUserRole(userRoleFilter3335, updateBody);
      return await User.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserTokens.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter9874 = { 'roleId': { '$in': role } };
      const routeRole5269 = await softDeleteRouteRole(routeRoleFilter9874, updateBody);
      const userRoleFilter8800 = { 'roleId': { '$in': role } };
      const userRole9692 = await softDeleteUserRole(userRoleFilter8800, updateBody);
      return await Role.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter1999 = { 'routeId': { '$in': projectroute } };
      const routeRole6791 = await softDeleteRouteRole(routeRoleFilter1999, updateBody);
      return await ProjectRoute.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await RouteRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteTieup,
  deleteLearn,
  deleteBulletin,
  deleteUser_X_webinar,
  deleteMeeting,
  deleteSpace,
  deleteCompany,
  deleteUser,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countTieup,
  countLearn,
  countBulletin,
  countUser_X_webinar,
  countMeeting,
  countSpace,
  countCompany,
  countUser,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteTieup,
  softDeleteLearn,
  softDeleteBulletin,
  softDeleteUser_X_webinar,
  softDeleteMeeting,
  softDeleteSpace,
  softDeleteCompany,
  softDeleteUser,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
