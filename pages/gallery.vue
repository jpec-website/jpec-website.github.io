<template>
	<section>
		<h2 class="is-size-4">フォトギャラリー</h2>
		<p>過去に開催されたイベントを写真でご紹介します</p>

		<div class="list-container">
			<div v-for="(item, index) in events" :key="index" class="list">
				<figure><img class="image is-4by3" :src="`${item.path}/${item.thumnail}`" alt=""></figure>
				<div class="text">
				<h4 class="has-text-centered">{{ item.name }}</h4>
				</div>
				<p class="btn"><nuxt-link :to="{ name: 'photo-list', params: { list: item.path } }">もっと見る</nuxt-link></p>
			</div>
		</div>
	</section>

</template>

<script setup lang="ts">
	// +*+*+*+*+*+*+*+*+*+*+*+*
	// 
	// 定義
	// 
	// +*+*+*+*+*+*+*+*+*+*+*+*
	type Events = {
		name: string
		path: string
		thumnail:string
	}	
	const events = ref<Events[]>([]);

	// +*+*+*+*+*+*+*+*+*+*+*+*
	// 
	// イベントメソッド
	// 
	// +*+*+*+*+*+*+*+*+*+*+*+*
	// *------
	// 起動時
	// *------
	( async () => {
		// イベント情報を取得
		events.value = (await import('~/assets/json/event.json')).default
	})();
</script>
