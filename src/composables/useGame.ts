import type { Memorie } from '@/types'
import { ref } from 'vue'
import { spiderImages } from '@/config/arrayImages'
import { useStateApp } from './useStateApp'

export const useGame = () => {
  // array of memorie cards
  const cardMemories = ref<Memorie[]>([])
  const compare = ref<string[]>([]) // save the name of selected cards
  const { STATE_APP } = useStateApp()

  // unorder cards
  const moveCards = () => {
    spiderImages.forEach((value, i) => {
      cardMemories.value.push({
        id: crypto.randomUUID(),
        name: value.split('.')[0],
        pathImg: value,
        defaultImg: 'logo.jpg',
        isVisible: false
      })
      const j = Math.floor(Math.random() * (i + 1))
      ;[cardMemories.value[i], cardMemories.value[j]] = [
        cardMemories.value[j],
        cardMemories.value[i]
      ]
    })
  }

  // show card selected
  const selectCard = (selectedCard: Memorie) => {
    if (cardMemories.value.filter((val) => val.isVisible).length === 2) return

    cardMemories.value.find((card) => {
      if (card.id === selectedCard.id) {
        card.isVisible = !card.isVisible
        compare.value.push(card.name)
      }
    })

    if (compare.value.length < 2) return

    if (compare.value[0] !== compare.value[1]) {
      cardMemories.value.filter((val) => {
        if (val.name === compare.value[0] || val.name === compare.value[1]) {
          setTimeout(() => {
            val.isVisible = false
            compare.value = []
          }, 1000)
        }
      })
      return
    }

    setTimeout(() => {
      const newsCards = cardMemories.value.filter((val) => val.name !== compare.value[0])
      cardMemories.value = [...newsCards]
      compare.value = []
      if (cardMemories.value.length === 0) {
        console.log('winner')
        STATE_APP.value = 'WINNER'
      }
    }, 1000)

    // console.log({ compare: compare.value })
  }

  moveCards()

  return {
    // properties
    cardMemories,
    compare,
    // methods
    moveCards,
    selectCard
  }
}
