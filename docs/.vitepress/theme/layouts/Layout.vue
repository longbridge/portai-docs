<script setup lang="ts">
import Breadcrumb from '../components/Breadcrumb/index.vue'
import Layout from './LayoutInner.vue'
import { useI18nSync, useHighlighter, useLLMMarkdownLink } from '../composables'

// 使用抽离的 hooks
useI18nSync()
useHighlighter()

const { llmMarkdownLink } = useLLMMarkdownLink()
</script>

<template>
  <Layout>
    <template #doc-top>
      <div class="-mt-4">
        <Breadcrumb />
      </div>
    </template>
  </Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

.VPSidebar .VPSidebarItem.level-0 {
  @apply pb-2.5;
}

.VPSidebar .level-1.is-link {
  @apply -ml-2;
}
</style>
