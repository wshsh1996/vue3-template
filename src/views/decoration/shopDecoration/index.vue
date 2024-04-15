<script setup lang="ts">
import useCurd from '@/hooks/curd'
import router from '@/router'
import PageFoot from '@/views/decoration/homeDesign/components/pageFoot.vue'
import { ElMessage } from 'element-plus'
import { ref, watch, nextTick } from 'vue'

const { state, useMode, getDetail } = useCurd({
  url: '/admin/diy',
  openPage: false,
  autoInit: false
})
// 获取table数据模板
const dataList = ref([
  {
    id: 1,
    style: {
      backgroundColor: null
    },
    name: '默认主题',
    title: '开源商城',
    updated_at: '2024-04-11 15:23:01',
    enabled: true
  },
  {
    id: 2,
    style: {
      backgroundColor: '#C11010'
    },
    name: '默认主题2',
    title: '首页',
    updated_at: '2024-04-08 11:32:38',
    enabled: false
  },
  {
    id: 3,
    style: {
      backgroundColor: '#C11010'
    },
    name: '默认主题3',
    title: '首页',
    updated_at: '2024-04-08 11:32:38',
    enabled: false
  }
])

// 详情数据模板
const detailList = {
  id: 1,
  name: '默认主题',
  title: '开源商城',
  enabled: true,
  components: [
    {
      bind: {
        radius: true,
        showIcon: true,
        textAlign: 'left',
        backgroundColor: {
          to: '#F7D8D8',
          from: '#ffffff'
        }
      },
      name: 'Search',
      title: '搜索框'
    },
    {
      bind: {
        lists: [
          {
            id: 1,
            img: 's3://2024/02/27/mIrCb3xO6F6DasHjJZPEXwXyE9lL5HLRntCT9EwK.png',
            link: null,
            title: null
          }
        ],
        radius: true,
        marginTop: 0,
        paddingLR: 0,
        indicatorDots: true
      },
      name: 'Banner',
      title: '轮播图组件'
    },
    {
      bind: {
        list: [
          {
            img: 'public://2023/11/13/0HtRkV8pLKrsyYj9AU4HoxluEH8TL6Xe2r15HyYh.png',
            link: '/pagesHome/sekilling/sekilling',
            title: '秒杀活动'
          },
          {
            img: 'public://2023/11/13/egce21hEskDb9eX57KalL8T6dpNfyCwgwelzNGU1.png',
            link: '/pagesUser/integral/integralShop',
            title: '积分商城'
          },
          {
            img: 'public://2023/11/13/xKJEFtoVyvKngBW9QlOvbbxFdblt5rYSL4DcODTx.png',
            link: '/pagesHome/group/group',
            title: '拼团活动'
          },
          {
            img: 'public://2023/11/13/ZHcwUCKq1F4PSytWi9XQSXMqRm3k4bHmgJs3bnUJ.png',
            link: '/pagesUser/coupon/coupon',
            title: '领券中心'
          },
          {
            img: 'public://2023/11/13/XGuGeVhdWT346LNqNbbVcKTIUeNK3fA66aeudeWh.png',
            link: '/pages/category/category?id=2',
            title: '商品分类'
          },
          {
            img: 'public://2023/11/13/mBATmsPuJGaeQlVrqHtI6mgO4hvnwKOsniCcA9qL.png',
            link: '/pagesUser/mark/mark',
            title: '我的收藏'
          }
        ],
        radius: true,
        preSize: 4
      },
      name: 'NavList',
      title: '导航组'
    },
    {
      bind: {
        desc: '促销简介',
        list: [
          {
            img: 's3://2023/12/19/fg4WoE0F9m3GWHu3zE4RgDVgB9oboXsR7lxlVvXl.jpg',
            desc: '店主诚意推荐 品质商品',
            link: '/pagesUser/coupon/coupon',
            title: '今日推荐',
            btn_background: 'linear-gradient(90deg, #4bc4ff, #207eff 100%)'
          },
          {
            img: 's3://2023/12/19/mHuHJBzlvllIdEgnycCLc0yRYUR1uoEWeEdcgCiG.jpg',
            desc: '店主诚意推荐 品质商品',
            link: '/pagesHome/sekilling/sekilling',
            title: '热门榜单',
            btn_background: 'linear-gradient(90deg,#ff9043,#ff531d 100%)'
          },
          {
            img: null,
            desc: '店主诚意推荐 品质商品',
            link: '/pages/category/category?id=25',
            title: '首发新品',
            btn_background: 'linear-gradient(90deg,#96e187,#48ce2c 100%)'
          },
          {
            img: null,
            desc: '店主诚意推荐 品质商品',
            link: null,
            title: '促销单品',
            btn_background: 'linear-gradient(90deg,#ffc560,#ff9c00 100%)'
          }
        ],
        title: '促销标题',
        marginTop: 0,
        titleColor: '#F20A0A',
        backgroundColor: '#ffe5e3',
        tagBackgroundColor: '#EB1515'
      },
      name: 'Cube',
      title: '活动魔方'
    },
    {
      bind: {
        icon: 's3://2023/12/13/F2UDv8VjF57Tt8vBkAy8LXRR08v9z0OEikLzMqPg.png'
      },
      name: 'Skill',
      title: '秒杀'
    },
    {
      bind: {
        icon: 's3://2024/01/03/SC9EOrHcLSLAkO8aGrJSoW9UtiYqZMgvx0Ffaeka.png',
        showBtn: true,
        showPrice: true,
        showTitle: true,
        showNumber: true,
        showGroupTag: true
      },
      name: 'Group',
      title: '拼团'
    },
    {
      bind: {
        themeColor: '#FF0000'
      },
      name: 'Coupon',
      title: '优惠券'
    },
    {
      bind: {
        height: 10,
        backgroundColor: '#ffffff'
      },
      name: 'Blank',
      title: '辅助空白'
    },
    {
      bind: {
        count: 4,
        layout: 'list',
        category: {
          img: [
            's3://2023/12/08/7QoWoYsu0qlMPqlcKmu6YENRYca7NHvuTZVQwRhc.jpg',
            's3://2023/12/08/BBGwsXZoiAY9zwCJpCbczyMYWgxwCofZmJU8BHDv.jpg',
            's3://2023/12/08/cf2PeelpbD0PRACGwkPKCQQvLYVrKjbyRxNkX0ET.jpg',
            's3://2023/12/08/7DgdLZERbuFqrOty5SCxt7e68nNefpcLx578vBrB.jpg'
          ],
          categoryIds: [48, 47, 45, 44]
        },
        showName: true,
        template: 'select',
        marginTop: 0,
        paddingLR: 0,
        showPrice: true,
        priceColor: '#ff0000',
        contentRadius: true,
        backgroundColor: '#ffffff',
        backgroundRadius: false,
        showOriginalPrice: true
      },
      name: 'GoodsList',
      title: '商品列表'
    },
    {
      bind: {
        lists: [
          {
            text: '首页',
            index: 0,
            iconPath: 's3://2024/01/20/7mUblltZ97dBQa7OoafZrUscoCMLuAqiZnNN1wkm.png',
            pagePath: 'pages/home/home',
            selectedIconPath: 's3://2024/04/11/U9frQ8RgUID6kuvbkDFjviSVrNufwcefDru91Ea1.png'
          },
          {
            text: '分类',
            index: 1,
            iconPath: 's3://2024/01/20/YGuUpxPc42ipADw8iJGSISVEbb1FNrmyUd94d4SQ.png',
            pagePath: 'pages/category/category',
            selectedIconPath: 's3://2024/01/20/rl6pZM2G6HonB1gIJQc4s5sPFiyz8r04T28KMDwb.png'
          },
          {
            text: '购物车',
            index: 2,
            iconPath: 's3://2024/01/20/O9bHpOMjdAV1gRw1M0PLdYRHQoeJww3fH09ezwyC.png',
            pagePath: 'pages/cart/cart',
            selectedIconPath: 's3://2024/01/20/87NkpSTE4pXOydWOmzgVvxHoIElEfuX6jFzX0gjp.png'
          },
          {
            text: '我的',
            index: 3,
            iconPath: 's3://2024/01/20/2rCOZoKs9IsydcyihaCmzDQMxSSRYI3ZUMmeAV7W.png',
            pagePath: 'pages/user/user',
            selectedIconPath: 's3://2024/01/20/UXuRyvoXrQL7kz0H8bmkRF9Oo55WWrS3rH0PM1AN.png'
          }
        ]
      },
      name: 'TabBar',
      title: '底部标签栏'
    },
    {
      bind: {
        img: ['s3://2024/02/27/mIrCb3xO6F6DasHjJZPEXwXyE9lL5HLRntCT9EwK.png'],
        marginTop: 15,
        paddingLR: 10,
        previewImg: ['s3://2024/01/23/vw4tp5y861rpPu7m94oPptfKWRTOuyLvJYaaAVs3.png']
      },
      name: 'Broadcast',
      title: '直播'
    },
    {
      bind: {
        lists: [
          {
            text: '首页',
            index: 0,
            iconPath: 's3://2024/01/20/7mUblltZ97dBQa7OoafZrUscoCMLuAqiZnNN1wkm.png',
            pagePath: 'pages/home/home',
            selectedIconPath: 's3://2024/04/11/U9frQ8RgUID6kuvbkDFjviSVrNufwcefDru91Ea1.png'
          },
          {
            text: '分类',
            index: 1,
            iconPath: 's3://2024/01/20/YGuUpxPc42ipADw8iJGSISVEbb1FNrmyUd94d4SQ.png',
            pagePath: 'pages/category/category',
            selectedIconPath: 's3://2024/04/11/WFP9NpCElBX2iLQIRqS8gAWhhLvgpoSZ20CEulMs.png'
          },
          {
            text: '购物车',
            index: 2,
            iconPath: 's3://2024/01/20/O9bHpOMjdAV1gRw1M0PLdYRHQoeJww3fH09ezwyC.png',
            pagePath: 'pages/cart/cart',
            selectedIconPath: 's3://2024/04/11/IdmetcEdjLG4j3GwRJP0lgus7D9h9fdycKwYkG3t.png'
          },
          {
            text: '我的',
            index: 3,
            iconPath: 's3://2024/01/20/2rCOZoKs9IsydcyihaCmzDQMxSSRYI3ZUMmeAV7W.png',
            pagePath: 'pages/user/user',
            selectedIconPath: 's3://2024/04/11/35V3HpRRArjFVKoKaOCXZNkHiv5Hlwkp3ZYoN5tY.png'
          }
        ]
      },
      name: 'TabBar',
      title: '底部标签栏'
    }
  ],
  created_at: '2023-11-14 11:51:21',
  updated_at: '2024-04-11 15:23:01',
  style: {
    backgroundColor: null
  }
}
// 获取已启用的数据模板
const enableList = ref()
const diyConfig = ref({
  name: '默认主题',
  title: '首页',
  style: {
    backgroundColor: '#f4f4f4'
  },
  components: [] as any[]
})

const pageFootStyle = ref<any>({
  name: 'TabBar',
  title: '底部标签栏',
  bind: {
    lists: [
      {
        index: 0,
        text: '首页',
        iconPath: 's3://2024/01/20/7mUblltZ97dBQa7OoafZrUscoCMLuAqiZnNN1wkm.png',
        selectedIconPath: 's3://2024/01/20/eMSyQzvAiol9BgBeaBm7x4eh0npJJMPTcgcOM8AA.png',
        pagePath: 'pages/home/home'
      },
      {
        index: 1,
        text: '分类',
        iconPath: 's3://2024/01/20/YGuUpxPc42ipADw8iJGSISVEbb1FNrmyUd94d4SQ.png',
        selectedIconPath: 's3://2024/01/20/rl6pZM2G6HonB1gIJQc4s5sPFiyz8r04T28KMDwb.png',
        pagePath: 'pages/category/category'
      },
      {
        index: 2,
        text: '购物车',
        iconPath: 's3://2024/01/20/O9bHpOMjdAV1gRw1M0PLdYRHQoeJww3fH09ezwyC.png',
        selectedIconPath: 's3://2024/01/20/87NkpSTE4pXOydWOmzgVvxHoIElEfuX6jFzX0gjp.png',
        pagePath: 'pages/cart/cart'
      },
      {
        index: 3,
        text: '我的',
        iconPath: 's3://2024/01/20/2rCOZoKs9IsydcyihaCmzDQMxSSRYI3ZUMmeAV7W.png',
        selectedIconPath: 's3://2024/01/20/UXuRyvoXrQL7kz0H8bmkRF9Oo55WWrS3rH0PM1AN.png',
        pagePath: 'pages/user/user'
      }
    ]
  }
})

watch(
  () => dataList.value,
  async (val: any) => {
    if (val) {
      const id = await val.find((item: any) => item.enabled).id
      // 获取启用的模板详情
      enableList.value = JSON.parse(JSON.stringify(detailList))
      nextTick(() => {
        diyConfig.value = {
          name: enableList.value.name,
          title: enableList.value.title,
          style: enableList.value.style,
          components: enableList.value.components
        }
      })
    }
  },
  {
    immediate: true
  }
)

// 跳转设计页面
// router.resolve 可以新开页面  router.push 单页面跳转
const url: any = router.resolve('/decoration/homeDesign')
const toDesign = () => {
  if (state.dataList) {
    if (state.dataList.length >= 10) return ElMessage.error('模板数量不能超过10个')
    window.open(url.href)
  }
}

// 编辑
const Edit = (id: any) => {
  const urls: any = router.resolve(`/decoration/homeDesign/?id=${id}`)
  window.open(urls.href)
}
</script>
<script lang="ts">
import Banner from '@/components/decoration/banner/index.vue'
import BannerStyle from '@/components/decoration/banner/indexStyle.vue'
import GoodsList from '@/components/decoration/productList/index.vue'
import GoodsListStyle from '@/components/decoration/productList/indexStyle.vue'
import NavList from '@/components/decoration/nav/index.vue'
import NavListStyle from '@/components/decoration/nav/indexStyle.vue'
import Search from '@/components/decoration/search/index.vue'
import SearchStyle from '@/components/decoration/search/indexStyle.vue'
import Skill from '@/components/decoration/spike/index.vue'
import SkillStyle from '@/components/decoration/spike/indexStyle.vue'
import Coupon from '@/components/decoration/coupon/index.vue'
import CouponStyle from '@/components/decoration/coupon/indexStyle.vue'
import Cube from '@/components/decoration/activity/index.vue'
import CubeStyle from '@/components/decoration/activity/indexStyle.vue'
import Group from '@/components/decoration/groupTeam/index.vue'
import GroupStyle from '@/components/decoration/groupTeam/indexStyle.vue'
import Customer from '@/components/decoration/supporter/index.vue'
import CustomerStyle from '@/components/decoration/supporter/indexStyle.vue'
import CustomText from '@/components/decoration/text/index.vue'
import CustomTextStyle from '@/components/decoration/text/indexStyle.vue'
import CustomRich from '@/components/decoration/rich/index.vue'
import CustomRichStyle from '@/components/decoration/rich/indexStyle.vue'
import Blank from '@/components/decoration/blank/index.vue'
import BlankStyle from '@/components/decoration/blank/indexStyle.vue'
import Promotion from '@/components/decoration/Promotion/index.vue'
import PromotionStyle from '@/components/decoration/Promotion/indexStyle.vue'
import PictureCube from '@/components/decoration/pictureCube/index.vue'
import PictureCubeStyle from '@/components/decoration/pictureCube/indexStyle.vue'
export default {
  components: {
    Banner: Banner,
    BannerStyle: BannerStyle,
    GoodsList: GoodsList,
    GoodsListStyle: GoodsListStyle,
    NavList: NavList,
    NavListStyle: NavListStyle,
    Search: Search,
    SearchStyle: SearchStyle,
    Skill: Skill,
    SkillStyle: SkillStyle,
    Coupon: Coupon,
    CouponStyle: CouponStyle,
    Cube: Cube,
    CubeStyle: CubeStyle,
    Group: Group,
    GroupStyle: GroupStyle,
    Customer: Customer,
    CustomerStyle: CustomerStyle,
    CustomText: CustomText,
    CustomTextStyle: CustomTextStyle,
    CustomRich: CustomRich,
    CustomRichStyle: CustomRichStyle,
    Blank: Blank,
    BlankStyle: BlankStyle,
    Promotion: Promotion,
    PromotionStyle: PromotionStyle,
    PictureCube: PictureCube,
    PictureCubeStyle: PictureCubeStyle
  }
}
</script>

<template>
  <el-card class="header">
    <div class="header-right">
      <el-button type="primary" @click="toDesign">添加模板</el-button>
    </div>
    <div class="main">
      <!--  启用模板  -->
      <div class="wrapper-con" v-if="diyConfig.components.length">
        <div class="content">
          <div
            class="con_txt"
            style="display: flex; flex-direction: column; overflow: hidden; height: 100%"
          >
            <div class="over_flowy">
              <div class="picture">
                <img src="../../../assets/electric.png" alt="" />
              </div>
              <div class="page-title">{{ diyConfig.title }}</div>
            </div>
            <div class="scrollCon">
              <div style="margin: 0 auto">
                <div
                  v-if="diyConfig.components"
                  class="scroll-box"
                  :style="'background-color:' + diyConfig.style.backgroundColor"
                >
                  <div v-for="(item, index) in diyConfig.components" :key="index" class="group">
                    <component :is="item.name" v-bind="item.bind"></component>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="page-foot">
                <div class="group">
                  <page-foot v-bind:tabBar="pageFootStyle.bind"></page-foot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <el-table
        :data="dataList"
        :header-cell-style="{
          'text-align': 'center',
          'background-color': '#F1F1F1',
          height: '50px',
          color: '#333'
        }"
        :cell-style="{ padding: '0', 'text-align': 'center', height: '50px', color: '#333' }"
        v-loading="state.listLoading"
        :row-key="state.primaryKey"
      >
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="模板名称"> </el-table-column>
        <el-table-column prop="title" label="页面标题"> </el-table-column>
        <el-table-column prop="updated_at" label="最近更新时间"> </el-table-column>
        <el-table-column prop="enabled" label="状态">
          <template #default="{ row }">
            <el-tag type="success" v-if="row.enabled">已启用</el-tag>
            <el-tag type="warning" v-else>未启用</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" link @click="Edit(row.id)">编辑</el-button>
            <el-button type="primary" :disabled="row.enabled" link @click="useMode(row.id)"
              >启用模板</el-button
            >
          </template>
        </el-table-column>
        <template #empty>
          <el-empty></el-empty>
        </template>
      </el-table>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.header {
  height: 760px;
}
.header-right {
  margin-bottom: 20px;
}
//.header {
//  display: flex;
//  justify-content: space-between;
//  .header-left {
//    flex: 1;
//  }
//}
:deep(.el-form) {
  margin-bottom: 15px;
}
.main {
  display: flex;
  justify-content: space-between;
}

// 模板
.wrapper-con {
  margin-right: 30px;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 400px;
  height: 650px;
  .content {
    height: 100%;
    width: 100%;
    .con_txt {
      height: 100%;
      .over_flowy {
        height: 75px;
        overflow-y: scroll;
        .picture {
          width: 379px;
          height: 20px;
          margin: 0 auto;
          background-color: #fff;
          img {
            display: block;
            max-width: 100%;
            object-fit: contain;
          }
        }
        .page-title {
          margin: 0 auto;
          width: 379px;
          height: 35px;
          background: #fff;
          font-size: 15px;
          color: #333;
          text-align: center;
          line-height: 35px;
        }
      }
      .scrollCon {
        overflow-y: scroll;
        overflow-x: hidden;
        height: calc(100vh - 160px);
        .scroll-box {
          flex: 1;
          width: 379px;
          margin: 0 auto;
          padding-top: 1px;
          .group {
            position: relative;
            cursor: move;
          }
        }
      }
      .footer {
        overflow-y: scroll;
        .page-foot {
          position: relative;
          width: 379px;
          height: 50px;
          margin: 0 auto 20px auto;
          cursor: move;
        }
      }
    }
  }

  .active_menu {
    color: var(--el-color-primary);
    background-color: #ccddff;
  }
}
</style>
