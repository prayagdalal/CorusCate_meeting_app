/**
 * seeder.js
 * @description :: functions that seeds mock data to run the application
 */
const _ = require('lodash');
const User = require('../model/user');
const authConstant = require('../constants/authConstant');
const Role = require('../model/role');
const ProjectRoute = require('../model/projectRoute');
const RouteRole = require('../model/routeRole');
const UserRole = require('../model/userRole');
const { replaceAll } = require('../utils/common');

/* seeds default users */
async function seedUser () {
  try {
    let user = await User.findOne({
      'username':'Izabella93',
      'isActive':true,
      'isDeleted':false
    });
    if (!user || !user.isPasswordMatch('rBNa1xhLC_LYJfp') ) {
      let user = new User({
        'password':'rBNa1xhLC_LYJfp',
        'username':'Izabella93',
        'user_id':878,
        'role':authConstant.USER_ROLE.User
      });
      await User.create(user);
    }
    let admin = await User.findOne({
      'username':'Johnson_Willms25',
      'isActive':true,
      'isDeleted':false
    });
    if (!admin || !admin.isPasswordMatch('Js_qx4gXpsrH48S') ) {
      let admin = new User({
        'password':'Js_qx4gXpsrH48S',
        'username':'Johnson_Willms25',
        'user_id':11,
        'role':authConstant.USER_ROLE.Admin
      });
      await User.create(admin);
    }
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed.');
  }
}
/* seeds roles */
async function seedRole () {
  try {
    const roles = [ 'User', 'Admin', 'System_User' ];
    for (let i = 0; i < roles.length; i++) {
      let result = await Role.findOne({
        name: roles[i],
        code: roles[i].toUpperCase() 
      });
      if (!result) {
        await Role.create({
          name: roles[i],
          code: roles[i].toUpperCase(),
          weight: 1
        });
      }
    };
    console.info('Role model seeded 🍺');
  } catch (error){
    console.log('Role seeder failed.');
  }
}

/* seeds routes of project */
async function seedProjectRoutes (routes) {
  try {
    if (routes && routes.length) {
      for (let i = 0; i < routes.length; i++) {
        const routeMethods = routes[i].methods;
        for (let j = 0; j < routeMethods.length; j++) {
          const routeObj = {
            uri: routes[i].path.toLowerCase(),
            method: routeMethods[j],
            route_name: `${replaceAll((routes[i].path).toLowerCase().substring(1), '/', '_')}`
          };
          if (routeObj.route_name){
            let result = await ProjectRoute.findOne(routeObj);
            if (!result) {
              await ProjectRoute.create(routeObj);
            }
          }
        }
      }
      console.info('ProjectRoute model seeded 🍺');
    }
  } catch (error){
    console.log('ProjectRoute seeder failed.');
  }
}

/* seeds role for routes */
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/admin/bulletin/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/bulletin/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/bulletin/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/bulletin/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/bulletin/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/bulletin/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/bulletin/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/bulletin/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/bulletin/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/bulletin/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/admin/bulletin/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/bulletin/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/bulletin/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/company/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/company/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/company/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/company/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/company/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/company/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/company/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/company/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/company/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/company/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/company/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/company/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/company/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/company/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/company/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/company/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/company/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/company/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/company/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/company/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/company/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/company/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/company/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/company/delete/:id',
        role: 'Admin',
        method: 'DELETE' 
      },
      {
        route: '/admin/company/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/company/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/company/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/learn/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/learn/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/learn/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/learn/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/learn/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/learn/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/learn/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/learn/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/learn/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/learn/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/learn/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/learn/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/learn/delete/:id',
        role: 'User',
        method: 'DELETE' 
      },
      {
        route: '/admin/learn/delete/:id',
        role: 'Admin',
        method: 'DELETE' 
      },
      {
        route: '/admin/learn/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/learn/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/learn/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/learn/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/meeting/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/meeting/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/meeting/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/meeting/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/meeting/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/meeting/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/meeting/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/meeting/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/meeting/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/meeting/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/meeting/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/meeting/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/meeting/delete/:id',
        role: 'User',
        method: 'DELETE' 
      },
      {
        route: '/admin/meeting/delete/:id',
        role: 'Admin',
        method: 'DELETE' 
      },
      {
        route: '/admin/meeting/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/meeting/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/meeting/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/space/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/space/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/space/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/space/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/space/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/space/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/space/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/space/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/space/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/space/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/space/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/space/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/space/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/space/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/space/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/space/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/space/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/space/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/space/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/space/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/space/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/space/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/space/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/space/delete/:id',
        role: 'Admin',
        method: 'DELETE' 
      },
      {
        route: '/admin/space/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/space/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/space/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/tieup/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/tieup/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/tieup/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/tieup/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/tieup/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/tieup/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/tieup/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/tieup/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/tieup/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/tieup/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/tieup/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/tieup/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/tieup/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/tieup/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/tieup/delete/:id',
        role: 'Admin',
        method: 'DELETE' 
      },
      {
        route: '/admin/tieup/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/tieup/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/tieup/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/aggregate',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'Admin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'User',
        method: 'DELETE' 
      },
      {
        route: '/admin/user/delete/:id',
        role: 'Admin',
        method: 'DELETE' 
      },
      {
        route: '/admin/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/user/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/addbulk',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/user_x_webinar/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/admin/user_x_webinar/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/user_x_webinar/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/admin/user_x_webinar/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user_x_webinar/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/admin/user_x_webinar/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/admin/user_x_webinar/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/user_x_webinar/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/admin/user_x_webinar/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/usertokens/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/role/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/role/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/aggregate',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/routerole/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/routerole/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/userrole/:id',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/bulletin/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/bulletin/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/bulletin/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/bulletin/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/bulletin/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/bulletin/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bulletin/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/bulletin/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/bulletin/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bulletin/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/company/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/company/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/company/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/company/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/company/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/company/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/company/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/company/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/company/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/company/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/company/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/company/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/learn/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/learn/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/learn/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/learn/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/learn/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/learn/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/learn/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/learn/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/learn/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/addbulk',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/meeting/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/meeting/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/meeting/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/meeting/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/meeting/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/meeting/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/meeting/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/meeting/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/meeting/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/meeting/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/meeting/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/meeting/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/meeting/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/space/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/space/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/space/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/space/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/space/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/space/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/space/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/space/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/tieup/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/tieup/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/tieup/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/tieup/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/tieup/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/tieup/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/tieup/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/tieup/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/addbulk',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/:id',
        role: 'User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user_x_webinar/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user_x_webinar/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user_x_webinar/:id',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/:id',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/aggregate',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/aggregate',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user_x_webinar/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user_x_webinar/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user_x_webinar/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user_x_webinar/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user_x_webinar/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },

    ];
    if (routeRoles && routeRoles.length) {
      for (let i = 0; i < routeRoles.length; i++) {
        let route = await ProjectRoute.findOne({
          uri: routeRoles[i].route.toLowerCase(),
          method: routeRoles[i].method,
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        let role = await Role.findOne({
          code: (routeRoles[i].role).toUpperCase(),
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        if (route && route.id && role && role.id) {
          let routeRoleObj = await RouteRole.findOne({
            roleId: role.id,
            routeId: route.id
          });
          if (!routeRoleObj) {
            await RouteRole.create({
              roleId: role.id,
              routeId: route.id
            });
          }
        }
      };
      console.info('RouteRole model seeded 🍺');
    }
  } catch (error){
    console.log('RouteRole seeder failed.');
  }
}

/* seeds roles for users */
async function seedUserRole (){
  try {
    let user = await User.findOne({
      'username':'Izabella93',
      'isActive':true,
      'isDeleted':false
    });
    let userRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (user && user.isPasswordMatch('rBNa1xhLC_LYJfp') && userRole){
      let count = await UserRole.countDocuments({
        userId: user.id,
        roleId: userRole.id
      });
      if (count == 0) {
        await UserRole.create({
          userId: user.id,
          roleId: userRole.id 
        });
        console.info('user seeded 🍺');
      }   
    }
    let admin = await User.findOne({
      'username':'Johnson_Willms25',
      'isActive':true,
      'isDeleted':false
    });
    let adminRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (admin && admin.isPasswordMatch('Js_qx4gXpsrH48S') && adminRole){
      let count = await UserRole.countDocuments({
        userId: admin.id,
        roleId: adminRole.id
      });
      if (count == 0) {
        await UserRole.create({
          userId: admin.id,
          roleId: adminRole.id 
        });
        console.info('admin seeded 🍺');
      }   
    }
  } catch (error){
    console.log('UserRole seeder failed.');
  }
}

async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();

};
module.exports = seedData;