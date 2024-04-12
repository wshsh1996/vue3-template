import type { IMenu } from '@/models/menu'

const apiRouter: IMenu[] = [
  {
    path: '/modules',
    name: 'modules',
    redirect: '/modules',
    meta: {
      title: '封装组件',
      icon: 'modules',
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
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    redirect: '/order/orderManage',
    meta: {
      title: '订单',
      icon: 'order',
      permission: ['order']
    },
    children: [
      {
        path: '/order/orderManage',
        name: 'orderManage',
        component: '/order/orderManage/index',
        meta: {
          title: '订单管理',
          permission: ['orderManage']
        }
      },
      {
        path: '/order/orderSet',
        name: 'orderSet',
        component: '/order/orderSet/index',
        meta: {
          title: '订单配置',
          permission: ['orderSet']
        }
      },
      {
        path: '/order/orderAfter',
        name: 'orderAfter',
        component: '/order/orderAfter/index',
        meta: {
          title: '售后订单',
          permission: ['orderAfter']
        }
      }
    ]
  },
  {
    path: '/marketing',
    name: 'marketing',
    redirect: '/marketing',
    meta: {
      title: '营销',
      icon: 'marketing',
      permission: ['marketing']
    },
    children: [
      {
        path: '/marketing/creditsManage',
        name: 'creditsManage',
        redirect: '/marketing/creditsManage/creditsGoods',
        meta: {
          title: '积分管理',
          permission: ['creditsManage']
        },
        children: [
          {
            path: '/marketing/creditsManage/creditsGoods',
            name: 'creditsGoods',
            component: '/marketing/creditsManage/creditsGoods/index',
            meta: {
              title: '积分商品',
              permission: ['creditsGoods']
            }
          },
          {
            path: '/marketing/creditsManage/creditsOrder',
            name: 'creditsOrder',
            component: '/marketing/creditsManage/creditsOrder/index',
            meta: {
              title: '积分订单',
              permission: ['creditsOrder']
            }
          },
          {
            path: '/marketing/creditsManage/creditsSet',
            name: 'creditsSet',
            component: '/marketing/creditsManage/creditsSet/index',
            meta: {
              title: '积分配置',
              permission: ['creditsSet']
            }
          }
        ]
      },
      {
        path: '/marketing/saveValue',
        name: 'saveValue',
        redirect: '/marketing/saveValue/saveType',
        meta: {
          title: '储值',
          permission: ['saveValue']
        },
        children: [
          {
            path: '/marketing/saveValue/saveType',
            name: 'saveType',
            component: '/marketing/saveValue/saveType/index',
            meta: {
              title: '储值类型',
              permission: ['saveType']
            }
          }
        ]
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
        path: '/setting/delivery',
        name: 'delivery',
        component: '/setting/delivery',
        meta: {
          title: '配送设置',
          permission: ['delivery']
        },
        children: [
          {
            path: '/setting/delivery/freightSet',
            name: 'freightSet',
            component: '/setting/delivery/freightSet/index',
            meta: {
              title: '运费设置',
              permission: ['freightSet']
            }
          },
          {
            path: '/setting/delivery/logistics',
            name: 'logistics',
            component: '/setting/delivery/logistics/index',
            meta: {
              title: '物流公司',
              permission: ['logistics']
            }
          },
          {
            path: '/setting/delivery/pickupManage',
            name: 'pickupManage',
            component: '/setting/delivery/pickupManage/index',
            meta: {
              title: '自提点管理',
              permission: ['pickupManage']
            }
          }
        ]
      },
      {
        path: '/setting/logo',
        name: 'logo',
        component: '/setting/logo/index',
        meta: {
          title: 'logo配置',
          permission: ['logo']
        }
      },
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
