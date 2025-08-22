<template>
  <div class="container-full">
    <section class="section">
      <div class="header">
        <button v-if="isSlider" @click="toggleView">Xem tất cả</button>
        <button v-else @click="toggleView">Thu gọn</button>
      </div>
      <div v-if="isSlider" class="slider-container">
        <swiper
          :modules="[Navigation]"
          :slides-per-view="5"
          :space-between="15"
          :navigation="true"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(product, index) in products"
            :key="index"
            class="product-card"
          >
            <img :src="product.image" :alt="product.alt" />
            <div class="info">
              <h3>{{ product.title }}</h3>
              <p>{{ product.subtitle }}</p>
            </div>
            <span class="live-tag">LIVE</span>
          </swiper-slide>
        </swiper>
      </div>
      <div v-else class="grid-container">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
        >
          <img :src="product.image" :alt="product.alt" />
          <div class="info">
            <h3>{{ product.title }}</h3>
            <p>{{ product.subtitle }}</p>
          </div>
          <span class="live-tag">LIVE</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
 
  import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const isSlider = ref(true);

const toggleView = () => {
  isSlider.value = !isSlider.value;
};

export default {
    props: {
    products: {
      type: Array,
      required: true
    }
  }}

</script>
<style >
.section {
  padding: 20px;
  background: #0d0c11;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  font-size: 24px;
}

.header button {
  background: none;
  border: 1px solid #666;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
}

.slider-container {
  /* Swiper adds its own arrows and controls */
  position: relative;
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  background: #1e1e2d;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.info {
  padding: 10px;
}

.info h3 {
  font-size: 16px;
  margin: 0 0 5px 0;
}

.info p {
  font-size: 14px;
  color: #aaa;
  margin: 0;
}

.live-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 12px;
}

/* Swiper specific styling */
.mySwiper {
  width: 100%;
  height: 100%;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 15px;
  border-radius: 5px;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 18px !important;
  font-weight: bold;
}
</style>
