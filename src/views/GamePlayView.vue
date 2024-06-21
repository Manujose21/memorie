<template>
  <section class="grid grid-cols-5">
    <CardImage :memories="cardMemories" @on-select-card="selectCard" />
  </section>
</template>

<script setup lang="ts">
import CardImage from '@/components/CardImage.vue'
import { useGame } from '../composables/useGame'

const { cardMemories, selectCard } = useGame()
</script>

<style scoped>
h1 {
  @apply text-2xl;
}
</style>
