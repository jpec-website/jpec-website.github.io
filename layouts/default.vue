<template>
    <body class="home">
    <div id="container">
    <!-- ヘッダ -->
    <header class="has-background-dark" style="z-index: 50;">
        <nav class="navbar has-background-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a href="/" class="navbar-item has-text-white has-background-dark"><img cl src="~/assets/img/jpec.png" alt="JPEC" />一般社団法人 日本植物輸出協議会</a>
                <a role="button" class="navbar-burger has-text-white" :class="{'is-active': menuon == true}" aria-label="menu" aria-expanded="false" data-target="navbarBasic" @click="openbgr()">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-end">
                <div id="navbarBasic" class="navbar-menu has-background-dark" :class="{'is-active': menuon == true}">
                    <div class="navbar-start">
                        <nuxt-link to="/gallery" class="navbar-item has-text-white has-background-dark">フォトギャラリー</nuxt-link>
                        <nuxt-link to="/contact" class="navbar-item has-text-white has-background-dark">お問い合わせ</nuxt-link>
                    </div>
                </div>
            </div>
        </nav>


    </header>
    <!-- メインコンテンツ -->
    <main>
        <slot />
    </main>
    <!-- フッタ -->
    <footer>
        <ul id="footermenu">
            <li><a href="/" class="navbar-item has-text-white has-background-dark">HOME</a></li>
            <li><nuxt-link to="/gallery" class="navbar-item has-text-white has-background-dark">フォトギャラリー</nuxt-link></li>
            <li><nuxt-link to="/contact" class="navbar-item has-text-white has-background-dark">お問い合わせ</nuxt-link></li>
            <li><a href="https://www.facebook.com/jpec2012/" class="navbar-item has-text-white has-background-dark"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com/jpec2012/?hl=ja" class="navbar-item has-text-white has-background-dark"><i class="fab fa-instagram"></i></a></li>
        </ul>
        <small>Copyright&copy; 日本植物輸出協議会 All Rights Reserved.</small>
        <span class="pr"><a href="https://template-party.com/" target="_blank">《Web Design:Template-Party》</a></span>
    </footer>
    </div>
    </body>
</template>

<script setup lang="ts">
const menuon = ref<boolean>(false)

const openbgr =  () => {
    menuon.value = !menuon.value
}

</script>
