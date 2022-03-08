/**
 * companyRoutes.js
 * @description :: CRUD API routes for company
 */

const express = require('express');
const router = express.Router();
const companyController = require('../../../controller/device/v1/companyController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/company/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,companyController.addCompany);
router.route('/device/api/v1/company/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,companyController.findAllCompany);
router.route('/device/api/v1/company/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,companyController.getCompanyCount);
router.route('/device/api/v1/company/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,companyController.getCompanyByAggregate);
router.route('/device/api/v1/company/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,companyController.softDeleteManyCompany);
router.route('/device/api/v1/company/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,companyController.bulkInsertCompany);
router.route('/device/api/v1/company/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,companyController.bulkUpdateCompany);
router.route('/device/api/v1/company/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,companyController.deleteManyCompany);
router.route('/device/api/v1/company/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,companyController.softDeleteCompany);
router.route('/device/api/v1/company/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,companyController.partialUpdateCompany);
router.route('/device/api/v1/company/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,companyController.updateCompany);    
router.route('/device/api/v1/company/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,companyController.getCompany);
router.route('/device/api/v1/company/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,companyController.getCompany);
router.route('/device/api/v1/company/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,companyController.deleteCompany);

module.exports = router;
