<template>
  <h1 class="text-2xl">Ganaste</h1>
  <img src="../assets/images/spider-baila.gif" class="h-28" />
  <button @click="STATE_APP = 'MENU'">Menu</button>
  <button @click="STATE_APP = 'GAME'">Volver a jugar</button>
</template>
<script setup lang="ts">
import { useStateApp } from '@/composables/useStateApp'

const { STATE_APP } = useStateApp()
</script>
<style></style>
