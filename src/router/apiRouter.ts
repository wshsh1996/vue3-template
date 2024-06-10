import type { IMenu } from '@/models/menu'

const apiRouter: IMenu[] = [
  {
    path: '/modules',
    name: 'modules',
    redirect: '/modules',
    meta: {
      title: '封装组件',
      icon: 'application',
      permission: ['modules']
    },
    children: [
      {
        path: '/modules/numberAnimationCase',
        name: 'numberAnimationCase',
        component: '/modules/numberAnimationCase/index',
        meta: {
          title: '数值动画',
          permission: ['numberAnimationCase']
        }
      },
      {
        path: '/modules/mergeCell',
        name: 'mergeCell',
        component: '/modules/mergeCell/index',
        meta: {
          title: '合并表格',
          permission: ['mergeCell']
        }
      }
    ]
  },
  {
    path: '/finance',
    name: 'finance',
    redirect: '/finance/cashApply',
    meta: {
      title: '财务',
      icon: 'finance',
      permission: ['finance']
    },
    children: [
      {
        path: '/finance/statistic',
        name: 'statistic',
        component: '/finance/statistic/index',
        meta: {
          title: '交易统计',
          permission: ['statistic']
        }
      }
    ]
  },
  {
    path: '/decoration',
    name: 'decoration',
    redirect: '/decoration/themeStyle',
    meta: {
      title: '装修',
      icon: 'decorate',
      permission: ['decoration']
    },
    children: [
      {
        path: '/decoration/themeStyle',
        name: 'themeStyle',
        component: '/decoration/themeStyle/index',
        meta: {
          title: '主题风格',
          permission: ['themeStyle']
        }
      },
      {
        path: '/decoration/shopDecoration',
        name: 'shopDecoration',
        component: '/decoration/shopDecoration/index',
        meta: {
          title: '店铺装修',
          permission: ['shopDecoration']
        }
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    redirect: '/setting',
    meta: {
      title: '设置',
      icon: 'set',
      permission: ['setting']
    },
    children: [
      {
        path: '/setting/agreement',
        name: 'agreement',
        component: '/setting/agreement/index',
        meta: {
          title: '协议设置',
          permission: ['agreement']
        }
      },
      {
        path: '/setting/permission',
        name: 'permissionList',
        redirect: '/setting/permission/role',
        meta: {
          title: '权限管理',
          permission: ['permissionList']
        },
        children: [
          {
            path: '/setting/permission/role',
            name: 'role',
            component: '/setting/permission/role/list',
            meta: {
              title: '角色管理',
              permission: ['role']
            }
          },
          {
            path: '/setting/permission/user',
            name: 'Administrator',
            component: '/setting/permission/user/list',
            meta: {
              title: '管理员',
              permission: ['Administrator']
            }
          },
          {
            path: '/setting/permission/permission',
            name: 'permission',
            component: '/setting/permission/permission/list',
            meta: {
              title: '权限管理',
              permission: ['permission']
            }
          }
        ]
      }
    ]
  },
  {
    path: '/application',
    name: 'application',
    component: '/application/index',
    meta: {
      title: '应用中心',
      icon: 'application',
      permission: ['application']
    }
  }
]

export default apiRouter
