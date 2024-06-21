<template>
  <div
    class="min-h-screen flex flex-col gap-2 items-center justify-center px-4 max-w-screen-lg m-auto"
  >
    <template v-if="STATE_APP === 'MENU'">
      <MenuView />
    </template>
    <template v-if="STATE_APP === 'GAME'">
      <GamePlay />
    </template>
    <template v-if="STATE_APP === 'WINNER'">
      <GameWin />
    </template>
    <template v-if="STATE_APP === 'LOSER'">
      <GameOver />
    </template>
  </div>
</template>
<script setup lang="ts">
import MenuView from '@/views/MenuView.vue'
import GamePlay from '@/views/GamePlayView.vue'
import GameOver from '@/views/GameOverView.vue'
import GameWin from '@/views/GameWinnerView.vue'
import { useStateApp } from '@/composables/useStateApp'

const { STATE_APP } = useStateApp()
</script>
<style></style>
