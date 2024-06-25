<script>
export default {
  setup() {
    const seo = useSeo() || {};
    const page = usePage() || {};
    const img = seo?.imageSocial?.src || seo?.imageSocial || '';

    const imageSocial = page.joinOrigin(img || '');// seo.url + seo.imageSocial;
    return {
      seo,
      imageSocial,
      page,
    };
  },
};
</script>

<template>
  <title>{{ seo?.title }}</title>
  <meta name="description" :content="seo?.description">
  <meta name="keywords" :content="seo?.keywords">
  <template v-if="seo?.google !== false">
    <meta itemprop="name" :content="seo?.title">
    <meta itemprop="description" :content="seo?.description">
    <meta itemprop="image" :content="imageSocial">
  </template>
  <template v-if="seo?.twitter !== false">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" :content="page?.url">
    <meta name="twitter:title" :content="seo?.title">
    <meta name="twitter:description" :content="seo?.description">
    <meta name="twitter:image" :content="imageSocial">
    <meta name="twitter:site" :content="seo?.twitterSite">
  </template>
  <template v-if="seo?.facebook !== false">
    <meta property="og:title" :content="seo?.title">
    <meta property="og:type" content="website">
    <meta property="og:description" :content="seo?.description">
    <meta property="og:image" :content="imageSocial">
    <meta property="og:url" :content="page?.url">
    <meta property="og:site_name" :content="seo?.title">
  </template>
</template>
