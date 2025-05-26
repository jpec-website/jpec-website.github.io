<template>
	<section>
		<h1 class="is-size-4 has-text-centered m-5">{{title}}</h1>
		<div class="list-container">
			<div v-for="(item, index) in images" :key="index" class="list" @click="() => showImg(index)">
				<figure><img class="image" :src="`${item}`" alt=""></figure>
			</div>
			<VueEasyLightbox :visible="visibleRef" :imgs="images" :index="indexRef" @hide="onHide"/>


		</div>
	</section>
</template>

<script setup lang="ts">

	const visibleRef = ref(false);
	const indexRef = ref(0);
	const images = ref<string[]>([]);
	const path = useRoute().params.list;
	const title = (await import('~/assets/json/event.json')).default.find((u) => u.path == path)?.name;

	// *------
	// 起動時
	// *------
	( async () => {
		// publicフォルダの全画像を取得
		const glob = import.meta.glob("~/public/*/*.jpg")
		// 該当フォルダの画像をすべて取得
		for (const i in glob){
			if (path == i.split('/')[2]){
				images.value.push(`/${ path }/${ i.split('/')[3] }`)
			}
		}
	})();

	const showImg = (index:number) => {
		indexRef.value = index;
		visibleRef.value = true;
	}
	const onHide = () => {
		visibleRef.value = false
	}

</script>
