import type { StatusApp } from '@/types'
import { ref } from 'vue'

const STATE_APP = ref<StatusApp>('MENU')
export const useStateApp = () => {
  return {
    STATE_APP
  }
}
