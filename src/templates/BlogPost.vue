<template>
  <Layout>
    <div class="article">
      <div class="article-header">
        <h1>{{ $page.blogPost.title }}</h1>
        <span>{{ createdAt }}</span>
      </div>
      <g-image :src="$page.blogPost.image" fit="cover" />
      <div class="content" v-html="$page.blogPost.content" />
      <div>
        <a href="#" v-for="tag in tags" :key="tag" style="margin-right: .5rem;">{{ tag }}</a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  },
  computed: {
    createdAt () {
      try {
        return (new Date(this.$page.blogPost.date)).toLocaleDateString()
      } catch (error) {
        return this.$page.blogPost.date
      }
    },
    tags () {
      if (!this.$page.blogPost.tags) {
        return []
      }
      return this.$page.blogPost.tags
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
      tags
    }
  }
</page-query>

<style>
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
  }

  .article > .article-header {
    margin-bottom: 1rem;
  }

  .article > .article-header > h1 {
    color: #f5f103;
  }
  .article h1 {
    font-size: 40px;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: #f5f103;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
