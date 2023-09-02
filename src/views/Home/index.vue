<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { CHAPTER__CONFIGURATION } from '@/constants'
import { useGlobalZIndex } from '@/composables/use-global-z-index'
import { isDef } from '@/utils'

import Overlay from '@/components/Overlay/Overlay'

const router = useRouter()

const globalZIndex = useGlobalZIndex()

const zIndex = ref(globalZIndex)

const chapterConfiguration = ref(CHAPTER__CONFIGURATION)

// 跳转到序章
function navigateToForeword() {
  router.push('/foreword')
}

function navigateToCreation() {
  router.push('/programming-createion')
}

const activeId = ref()
// 切换面板状态
const togglePaneById = (id?: string)=> {
  if(!isDef(id)) {
    if(activeId.value) {
      togglePaneById(activeId.value)
    }
    return
  }

  const idx = chapterConfiguration.value.findIndex(c=> c.id === id)
  if(idx > -1) {
    const chapter = chapterConfiguration.value[idx]
    activeId.value = chapter.isActive ? '' : chapter.id
    chapter.isActive = !chapter.isActive
  } else {
    console.error('未找到对应id');

  }
}

const showExtra = (id: string, disabled: boolean) => {

  if(disabled) {
    console.warn(`id为${id}，已被禁用！`)
    return
  }

  if (id === 'foreword') {
    navigateToForeword()
    return
  }

  if (id === 'programming-creation') {
    navigateToCreation()
    return
  }

  showOfOverlay.value = true
  togglePaneById(id)
}

const showOfOverlay = ref(false)
const  onClickOverlay = ()=> {
  showOfOverlay.value = false
  togglePaneById()
}
</script>

<template>
  <div class="home absolute inset-0 flex flex-col justify-center items-center">
    <div class="flex mt-20px">
      <div
        v-for="chapter in chapterConfiguration"
        :key="chapter.id"
        class="ml-20px first:ml-0 relative"
      >
        <!-- content -->
        <div
          @click="showExtra(chapter.id, chapter.disabled)"
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
          :style="{ zIndex: zIndex + 1 }"
        />
        <!-- h-32vw -->
      </div>
    </div>

    <Overlay :show="showOfOverlay" :zIndex="zIndex" @click="onClickOverlay"  />
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
