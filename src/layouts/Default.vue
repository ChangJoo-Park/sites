<template>
  <div class="layout">
    <header class="header">
      <g-link class="heading-link" :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link>
      <div class="nav-links">
        <g-link to="/" class="nav-link">Articles</g-link>
        <g-link to="/about" class="nav-link">About</g-link>
      </div>
    </header>
    <slot/>
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
    color: #4dba87;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Sans KR';
  }

  h1 {
    font-size: 48px;
  }

  h6 {
    font-size: 20px;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    font-size: 16px;
    padding: 0;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .nav-links .nav-link {
    color: #333;
    margin-right: 1rem;
  }

  .nav-links .nav-link.active--exact.active {
    color: #4dba87;
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
    font-family: 'Noto Sans KR';
    font-weight: bold;
  }
</style>
