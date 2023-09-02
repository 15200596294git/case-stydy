<script setup lang="ts">
import { ref , onMounted} from 'vue'
import { CHAPTER__CONFIGURATION } from '@/constants'

import Overlay from '@/components/Overlay/Overlay'

const chapterConfiguration = ref(CHAPTER__CONFIGURATION)
const showExtra = (id: string) => {
  chapterConfiguration.value.forEach((c) => {
    const activeIdx = chapterConfiguration.value.findIndex((c) => c.id === id)

    chapterConfiguration.value[activeIdx].isActive =
      activeIdx !== -1 ? true : false
  })
}

const touchMove = ()=> {
  console.log('冒泡');

}
</script>

<template>
  <div class="home absolute inset-0 flex flex-col justify-center items-center">
    <!-- <div></div> -->
    <div class="flex mt-20px">
      <div
        v-for="chapter in chapterConfiguration"
        :key="chapter.id"
        class="ml-20px first:ml-0 relative"
      >
        <!-- content -->
        <div
          @click="showExtra(chapter.id)"
          class="w-182px h-386px relative z-2"
        ></div>
        <img
          v-if="!chapter.isActive"
          :src="chapter.img"
          class="absolute -top-30px -left-30px w-auto h-420px"
          :class="{
            'filter-grayscale': chapter.disabled,
          }"
          alt=""
        />
        <img
          v-else
          :src="chapter.activeImg"
          class="absolute -left-30px -top-30px w-auto h-420px z-3"
          alt=""
        />
        <!-- h-32vw -->
      </div>
    </div>
    <div @touchmove="touchMove">
      <Overlay show :lockScroll="true">test</Overlay>
    </div>
  </div>
</template>
<style scoped lang="scss">
$bg_path: 'home_bg.png';
.home {
  width: 1334px;
  height: 100%;
  background: resolve($bg_path) no-repeat center;
  background-size: 1334px 100%;
}
</style>
