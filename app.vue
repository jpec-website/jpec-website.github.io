<template>
  <div>
    <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'JPEC　日本植物輸出協議会',
  meta: [
    { name: 'description', content: '日本植物輸出協議会 (Japan Plant Export Council 通称　JPEC) は、日本産花きの輸出拡大を目的とした組織です' },
  ],
})
useSeoMeta({
  title: 'JPEC　日本植物輸出協議会',
  ogTitle: 'JPEC　日本植物輸出協議会',
  description: '日本植物輸出協議会 (Japan Plant Export Council 通称　JPEC) は、日本産花きの輸出拡大を目的とした組織です',
  ogDescription: '日本植物輸出協議会 (Japan Plant Export Council 通称　JPEC) は、日本産花きの輸出拡大を目的とした組織です',
})
</script>