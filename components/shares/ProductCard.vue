<template>

<NuxtLink :to="'/product' + product.linkTo" >
<div class=" space-y-[16px] hover:shadow-lg hover:shadow-gray-300 transition-all duration-300 ease-in-out hover:scale-[1.02]">
<div class="flex justify-center items-center w-full ">
<img :src="product.thumnail.url" alt="images" class="h-full w-full"/>
</div>
<div class="px-[20px] space-y-[10px]">
<p class=" text-16px text-center text-black line-clamp-1">{{ product.name }}</p>
<div class="flex justify-center items-start gap-x-[20px]">
  <p class=" text-14px text-gray-500 ">Size: {{ product.size }}</p>                       
  <p class=" text-16px text-black">Price: ${{ product.price }}</p>
</div>
<div class="flex justify-center items-center pt-[6px] pb-[20px]">

    <NuxtLink :to="'/product' + product.linkTo" class="px-[28px] py-[8px] border-[1px] border-rose-600 hover:bg-rose-600 hover:text-white transition-colors duration-300">
     <p class="text-14px">Buy Now</p>
     </NuxtLink>
      </div>
      </div>

       </div>    
</NuxtLink>
               
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }}}
</script>