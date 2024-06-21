declare module '*.vue'

export type StatusApp = 'MENU' | 'GAME' | 'LOSER' | 'WINNER'

export interface Memorie {
  id: string
  name: string
  pathImg: string
  defaultImg: string
  isVisible: boolean
}
