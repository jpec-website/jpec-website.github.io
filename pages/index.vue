<template>
<!--スライドショー（slick）-->
<div class="mainimg has-text-centered" >
	<ClientOnly>
		<swiper-container ref="containerRef" :init="false">
		<!-- <swiper-slide v-for="(slide, idx) in slides" :key="idx">
			
			<img :src="`${ slide }`"/>
		</swiper-slide> -->
			<swiper-slide><img src="~/assets/img/1.jpg" width="720px"></swiper-slide>
			<swiper-slide><img src="~/assets/img/2.jpg" width="720px"></swiper-slide>
			<swiper-slide><img src="~/assets/img/3.jpg" width="720px"></swiper-slide>
			<swiper-slide><img src="~/assets/img/4.jpg" width="720px"></swiper-slide>
		</swiper-container>
	</ClientOnly>
</div>

<section>
	<h2 class="is-size-4">最近の活動</h2>
	<dl id="new">
		<dt>2025/04/23<span>イベント</span></dt>
		<dd>セントレア国際線到着出口　日本産花き週替り展示を実施（訪日旅行者へのPR事業）</dd>
		<dt>2025/04/12<span>イベント</span></dt>
		<dd>カザフスタン、アスタナ市で開催される「Flora Expo Astana」に出展いたしました</dd>
		<dt>2024/11/22<span>イベント</span></dt>
		<dd>台湾台北で開催される「Taiwan Flora Promotion Show」に出展いたしました</dd>
	</dl>
</section>

<section>
	<h2 class="is-size-4">公式SNS</h2>
	<p>本サイト以外でも、商品紹介等行っております。あわせてご覧ください</p>
	<div class="columns is-mobile is-vcentered has-text-centered">
		<div class="column"><a href="https://www.facebook.com/jpec2012/"><img src="~/assets/img/facebook.png" width="60px"></a></div>
		<div class="column"><a href="https://www.instagram.com/jpec2012/?hl=ja"><img src="~/assets/img/instagram.png" width="60px"></a></div>
	</div>

</section>

<section id="aboutjpec">
	<h2 class="is-size-4">本協議会について</h2>
	<div class="content">
		<h3 class="is-size-6">日本植物輸出協議会とは</h3>
		<p class="m-5">一般社団法人　日本植物輸出協議会（英名：Japan Plant Export Council、略称JPEC）は、日本産花きの輸出拡大を目的とし、輸出者であり日本全国の花き生産者と日頃から取引を行っている卸売市場と、輸出に関心を持ち積極的に海外に展開していこうとそする花き生産者が集い、様々な活動（広報宣伝・調査・勉強会など）を行っていくために組織されました</p>

		<h3 class="is-size-6">設立目的及び事業</h3>
		<div class="m-5">
			<p>当法人は、日本産花きの輸出拡大を最大の目的とし、その目的に資するため次の事業を行います</p>
			<ol>
				<li>海外における花き輸出環境の調査に関する事業</li>
				<li>海外における日本産花きの宣伝・広報活動に関する事業</li>
				<li>国内における日本産花きの宣伝・広報活動に関する事業</li>
				<li>海外向け輸出に必要な物流技術の開発およおび実証に関する事業</li>
				<li>海外向け輸出環境の整備に関する事業</li>
				<li>前各号に掲げる事業に附帯または関連する事業</li>
			</ol>
		</div>
		<h3 class=" is-size-6">役員</h3>
		<table class="table is-fullwidth m-5 has-text-centered">
			<tbody class="">
			<tr><td>理事長（代表理事）</td><td>福永　哲也</td><td>豊明花き株式会社</td></tr>
			<tr><td>副理事長</td><td>石川　将典</td><td>豊明花き株式会社</td></tr>
			<tr><td>理事</td><td>柏村　勇太</td><td>日本植物運輸株式会社</td></tr>
			<tr><td>理事</td><td>山田　浩平</td><td>日本貿易振興機構　名古屋貿易情報センター</td></tr>
			<tr><td>理事</td><td>大西　隆</td><td>有限会社セントラルローズ</td></tr>
			<tr><td>理事</td><td>佐野　拓也</td><td>サノ・オーキッド</td></tr>
			<tr><td>理事</td><td>藤井　隆</td><td>JA愛知みなみ　グロリオサ出荷連合生産者</td></tr>
			<tr><td>監事</td><td>辻　謙一</td><td>豊明花き株式会社</td></tr>
			</tbody>
		</table>

		<h3 class=" is-size-6">入会のご案内</h3>
		<p>輸出に関心のある花き生産者様・農協等生産者団体様・行政法人関係者の入会を随時受け付けております。お気軽にご連絡ください</p>
		<table class="table is-fullwidth m-5">
			<tbody class="">
			<tr>
				<td>会員種別</td>
				<td>
					<ul class="m-0"><li><strong>幹事会員</strong>　当法人の目的に賛同し入会したもの（当法人の法律上の社員）</li>
						<li><strong>正会員</strong>　当法人が行う国内外での宣伝広報活動、各種イベントに参加するために入会した花き生産者または農協等生産団体関係者</li>
						<li><strong>オブザーバ会員</strong>　当法人の事業を援助するために入会した者</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>会費</td>
				<td>幹事会員のみ年間費１万円/1口<br/>※正会員、オブザーバ会員は無料</td>
			</tr>
			<tr>
				<td>入会に関する連絡先</td>
				<td>〒470-1141　愛知県豊明市阿野町三本木１２１<br/>
					一般社団法人　日本植物輸出協議会　事務局（豊明花き株式会社　事業開発部国際取引課内）<br/>
					担当：佐々木・清水・加藤・平松・鈴木
					TEL：0562-96-1212　　FAX：0562-96-1192
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</section>

</template>

<script setup lang="ts">

	const containerRef = ref(null)
	const slides = ref(['~/assets/img/1.jpg','~/assets/img/2.jpg'])
	const swiper = useSwiper(containerRef,{
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 5000,
		},
		creativeEffect: {
			prev: {
			shadow: true,
			translate: [0, 0, -400],
			},
			next: {
			shadow: true,
			translate: [0, 0, -400],
			},
		},
	})
</script>
