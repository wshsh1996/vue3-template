import { nextTick, reactive } from 'vue'
import useLinkStore from '@/stores/modules/links'

const store = useLinkStore()

export default function usePublicModal() {
  const state = reactive<{
    id: any
    data: any
    // 装修链接弹窗
    addressVisible: boolean
    addressLoading: boolean
    // 装修地址弹窗
    linkVisible: boolean
    linkLoading: boolean

  }>({
    id: null,
    data: null,
    addressVisible: false,
    addressLoading: false,
    linkVisible: false,
    linkLoading: false,

  })

  // 弹窗显示
  const showForm = (id?: any, type?: string) => {
    if (type === 'address') {
      // 表单加载中
      state.addressLoading = true
      // 显示弹框
      state.addressVisible = true
    }
    if (type === 'link') {
      // 表单加载中
      state.linkLoading = true
      // 显示弹框
      state.linkVisible = true
      state.id = id
    }
    if (!id) {
      return
    } else {
      state.id = id
    }

    // 结束刷新
    nextTick(() => {
      state.addressLoading = false
      state.linkLoading = false
    })
  }
  const showAddress = async (id: any, data: any, callback?: any) => {
    // 表单加载中
    state.linkLoading = true
    // 显示弹框
    state.linkVisible = true
    await store.saveLink(data, id, callback)
    state.id = id

    // 结束刷新
    nextTick(() => {
      state.linkLoading = false
    })
  }

  return {
    state,
    showForm,
    showAddress
  }
}
