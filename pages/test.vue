<template>
  <div>
    <!-- <b-carousel>
      <b-carousel-item
        v-for="(carousel, i) in carousels"
        :key="i"
      >
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.text }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel> -->

    <div>
      asdqwe MY TEST YARN BUIKD v3
    </div>

    <div class="h-auto w-96">
      <CldImage
        public-id="slides/slide-01.jpg"
        width="400"
        crop="scale"
        fetchFormat="auto"
        quality="auto"
        loading="lazy"
        responsive
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
    };
  },
};
</script>
