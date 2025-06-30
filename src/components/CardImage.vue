<template>
  <template v-for="memorie in memories" :key="memorie.id">
    <img
      v-if="memorie.isVisible"
      :src="`../../public/images/${memorie.pathImg}`"
      class="border-2 my-2 mx-2 h-20 w-16 md:h-28 md:w-24 rounded-md object-cover border-red-600"
    />
    <img
      v-else
      :src="`../../public/images/${memorie.defaultImg}`"
      alt=""
      @click="emits('onSelectCard', memorie)"
      class="border-2 my-2 mx-2 h-20 w-16 md:h-28 md:w-24 rounded-md object-cover border-red-600"
    />
  </template>
</template>

<script setup lang="ts">
import type { Memorie } from '../types'
// import img from `../assets/${image}.jpg`
const { memories } = defineProps<{ memories: Memorie[] }>()

const emits = defineEmits<{
  onSelectCard: [type: Memorie]
}>()

// const [defaultImg, image, isVisible] = memorie
</script>

<style scoped></style>
