<script setup lang="ts">
import { onMounted } from 'vue'

const tableData = [
  {
    id: 1,
    allOrderCode: '123456',
    orderCode: '11111111',
    orderPrice: 10,
    price: 1,
    status: 1,
    subTotal: 13,
    receive: '帅帅',
    name: '小明1'
  },
  {
    id: 2,
    allOrderCode: '123456',
    orderCode: '11111111',
    orderPrice: 10,
    price: 1,
    status: 1,
    subTotal: 13,
    receive: '帅帅',
    name: '小明2'
  },
  {
    id: 3,
    allOrderCode: '123456',
    orderCode: '22222222',
    orderPrice: 12,
    price: 3,
    status: 2,
    subTotal: 13,
    receive: '帅帅',
    name: '小雷3'
  },
  {
    id: 4,
    allOrderCode: '789456',
    orderCode: '22222222',
    orderPrice: 12,
    price: 3,
    status: 2,
    subTotal: 13,
    receive: '帅帅',
    name: '小雷3'
  }
]
const mergeObj = {} // 用来记录需要合并行的下标
const mergeArr = [
  'id',
  'allOrderCode',
  'orderCode',
  'orderPrice',
  'price',
  'status',
  'subTotal',
  'receive',
  'name'
] // 表格中的列名

// getSpanArr方法
const getSpanArr = (data) => {
  mergeArr.forEach((key, index1) => {
    let count = 0 // 用来记录需要合并行的起始位置
    mergeObj[key] = [] // 记录每一列的合并信息
    data.forEach((item, index) => {
      // index == 0表示数据为第一行，直接 push 一个 1
      if (index === 0) {
        mergeObj[key].push(1)
      } else {
        // 判断当前行是否与上一行其值相等 如果相等 在 count 记录的位置其值 +1 表示当前行需要合并 并push 一个 0 作为占位
        if (item[key] === data[index - 1][key]) {
          mergeObj[key][count] += 1
          mergeObj[key].push(0)
        } else {
          // 如果当前行和上一行其值不相等
          count = index // 记录当前位置
          mergeObj[key].push(1) // 重新push 一个 1
        }
      }
    })
  })
}

// objectSpanMethod方法
// 默认接受四个值 { 当前行的值, 当前列的值, 行的下标, 列的下标 }
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  console.log(mergeObj, 'mergeObj')
  // 判断列的属性
  if (mergeArr.indexOf(column.property) !== -1) {
    // 判断其值是不是为0
    if (mergeObj[column.property][rowIndex]) {
      return [mergeObj[column.property][rowIndex], 1]
    } else {
      // 如果为0则为需要合并的行
      return [0, 0]
    }
  }
}

onMounted(() => {
  getSpanArr(tableData)
})
</script>

<template>
  <div class="table">
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
      <el-table-column prop="allOrderCode" label="母单编号"></el-table-column>
      <el-table-column prop="orderCode" label="子单编号"></el-table-column>
      <el-table-column prop="orderPrice" label="订单价格"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="subTotal" label="含税小计"></el-table-column>
      <el-table-column prop="receive" label="接收人"></el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss"></style>
