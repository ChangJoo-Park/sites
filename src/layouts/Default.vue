<template>
  <div class="layout">
    <header class="header">
      <g-link class="heading-link" :to="{ name: 'home' }" style="height:90px">
        <img src="/logo.png" alt="" width="90px" height="90px">
      </g-link>
      <div class="nav-links">
        <g-link to="/" class="nav-link">글목록</g-link>
        <g-link to="/about" class="nav-link">블로그에 대하여</g-link>
      </div>
    </header>
    <transition name="fade" appear>
      <slot/>
    </transition>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config () {
      return config
    }
  }
}
</script>


<style lang="css">
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #f5f103;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Iropke Batang';
  }

  h1 {
    font-size: 48px;
  }

  h6 {
    font-size: 20px;
  }

  body {
    font-family: 'Iropke Batang', serif;
    margin: 0;
    font-size: 16px;
    padding: 0;
    background-color: rgb(54, 70, 153);
    color: #eee;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .nav-links .nav-link {
    color: lightgrey;
    margin-right: 1rem;
  }

  .nav-links .nav-link.active--exact {
    color: #f5f103;
  }

  .nav-links .nav-link:last-child {
    margin-right: 0;
  }

  .heading-link {
    color: black;
    text-decoration: none;
    display: inline-block;
  }

  .layout {
    max-width: 600px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .layout {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .heading {
    margin-bottom: 20px;
    font-family: 'Iropke Batang';
    font-weight: bold;
  }

  .fade-enter-active {
    transition: opacity .2s;
  }

  .fade-enter {
    opacity: 0;
  }
</style>
