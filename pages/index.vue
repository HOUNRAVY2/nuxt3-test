<template>
  <div class="lg:container-full container-fluid">
    <section class="p-5 bg-[#0d0c11] dark:bg-white text-white">
      <div class=" justify-end items-center mb-5 hidden lg:flex">
        <button
          v-if="isSliderView"
          @click="toggleView"
          class=" text-white dark:text-black py-2 px-4 cursor-pointer rounded-md"
        >
          Xem tất cả
           <Icon name="ri:arrow-right-double-fill"  size="22"/>
        </button>
        <button
          v-else
          @click="toggleView"
          class=" text-white dark:text-black py-2 px-4 cursor-pointer rounded-md"
        >
          Thu gọn
           <Icon name="iconoir:fast-arrow-top"  size="22"/>
        </button>
      </div>
      <div v-if="isSliderView && isLgScreen" class="relative w-full border-t-[2px] border-[#E4B764] rounded-[20px] pt-[10px]">
        <swiper
          :modules="[Navigation]"
          :slides-per-view="5"
          :space-between="15"
          :navigation="true"
          class="w-full h-full"
        >
          <swiper-slide
            v-for="(product, index) in products"
            :key="index"
            class="bg-[#1e1e2d] rounded-xl overflow-hidden shadow-md relative"
          >
            <img :src="product.image" :alt="product.alt" class="w-full h-[150px] object-cover" />
            <div class="p-2.5 text-black bg-gradient-to-r from-[#F8E889] to-[#E4B764]">
              <h3 class="text-base m-0 mb-1.5">{{ product.title }}</h3>
              <p class="text-sm m-0">{{ product.subtitle }}</p>
            </div>
            <span class="absolute top-2.5 right-2.5 bg-rose-600 text-white dark:text-black py-1 px-2 rounded-md text-xs">LIVE</span>
          </swiper-slide>
        </swiper>
      </div>

      <div v-else class="grid grid-cols-autofill-minmax-200 gap-4 border-t-[2px] border-[#E4B764] rounded-[20px] pt-[10px]">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-[#1e1e2d] rounded-xl overflow-hidden shadow-md relative hover:scale-[1.01] transition-all ease-in-out cursor-pointer"
        >
          <img :src="product.image" :alt="product.alt" class="w-full md:h-[150px] h-[200px] object-cover" />
          <div class="p-2.5 text-black bg-gradient-to-r from-[#F8E889] to-[#E4B764]">
            <h3 class="text-base m-0 mb-1.5">{{ product.title }}</h3>
            <p class="text-sm m-0">{{ product.subtitle }}</p>
          </div>
          <span class="absolute top-2.5 right-2.5 bg-rose-600 text-white py-1 px-2 rounded-md text-xs">LIVE</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const isSliderView = ref(true);
const screenWidth = ref(0); 

const toggleView = () => {
  isSliderView.value = !isSliderView.value;
};

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  
  screenWidth.value = window.innerWidth;
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const isLgScreen = computed(() => {
  return screenWidth.value >= 1024; 
});

const { data: proData } = await useAsyncData('products-data', () => $fetch('/api/products'));
const products = proData.value || {};
const imageUrl = '_nuxt/assets/images/home/thumbnail.webp';
useHead({
  title: 'Interviews task',
  meta: [
    {
      name: 'landing page',
      content: 'testing website nuxt3'
    },
    { property: 'og:title', content: 'My First Post | Awesome Blog' },
    { property: 'og:description', content: 'An exciting summary of my first blog post.' },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:alt', content: 'A descriptive alt text for the thumbnail' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'My First Post | Awesome Blog' },
    { name: 'twitter:description', content: 'An exciting summary of my first blog post.' },
    { name: 'twitter:image', content: imageUrl },
  ],
})
</script>

<style>
.grid-cols-autofill-minmax-200 {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.swiper {
  --swiper-navigation-color: #fff;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 15px;
  border-radius: 5px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 18px !important;
  font-weight: bold;
}
</style>