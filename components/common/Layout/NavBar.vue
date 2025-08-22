<template>
  <header class="shadow-md bg-white dark:bg-gray-900 ">
    
    <div class="w-full relative hidden lg:block">
      <div class="absolute bg-black h-full 2xl:w-[300px] xl:w-[220px] lg:w-[180px] left-0 top-0 z-50 flex items-center justify-end rounded-tr-[70px]">
        <NuxtLink to="/" class="2xl:text-[70px] xl:text-[40px] lg:text-[28px] font-semibold dark:text-[#E4B764] text-white pr-[20px]">
          LOGO
        </NuxtLink>
      </div>
    <div class="bg-gradient-to-r from-[#EADDA7] to-[#C3A159] text-black">
      <div class="container-full  flex items-center justify-end pt-[12px] pb-[8px]">
        <nav class="flex-1 flex 2xl:justify-center justify-end ">
          <ul class="flex items-center text-sm font-semibold">
            <li v-for="link in navData.menu" :key="link.id" class="relative group px-[2px]">
              <NuxtLink :to="link.linkTo" class=" uppercase group-hover:text-[#E4B764] transition-colors xl:text-[14px] text-[12px] flex items-center py-[8px] group-hover:bg-gradient-to-b from-black to-[#5C5C5C] xl:px-[20px] px-[16px] rounded-full z-20 relative">
                {{ link.title }}
              </NuxtLink>
              <div v-if="link.subMenu" class="absolute space-y-[5px] px-[5px]  top-0 left-1/2 -translate-x-1/2  pt-[48px] pb-[20px] bg-gray-400/80 backdrop-blur-md text-black shadow-lg rounded-md overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto w-[170px]" >
                <NuxtLink v-for="item in link.subMenu" :key="item.id" :to="item.linkTo" class="block uppercase px-[12px] py-[6px] text-sm  hover:text-[#E4B764] hover:bg-gradient-to-b from-black to-[#5C5C5C] hover:border-none rounded-full bg-gray-400/90  transition-colors">
                  <img v-if="item.icon" :src="`_nuxt${item.icon}`" alt="icon" class="inline-block shrink-0 w-[30px] h-[30px]">
                  {{ item.title }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </nav>

        <div class="flex items-center space-x-[5px] bg-gradient-to-b from-black to-[#5C5C5C] rounded-full  px-[6px] py-[1px]">
          <div class="relative group">
            <button class="flex items-center space-x-[5px] bg-white/90 dark:bg-gray-800/90 rounded-full pl-[5px] pr-[8px] py-[6px] shadow">
              <Icon name="ph:coin-vertical-bold" class="text-amber-500" size="24"/>
              <span class="font-bold text-gray-800 dark:text-white">{{ user.wallet.main.toLocaleString() }}</span>
              <Icon name="mdi:plus-circle" size="16" class="text-[#E4B764]"/>
            </button>

            <div class="absolute top-full left-1/2 -translate-x-1/2 w-[150px] mt-[1px] p-4 space-y-3
                        bg-gray-800/50 dark:bg-black/50 text-white
                        backdrop-blur-md border border-white/10
                        rounded-2xl shadow-lg z-10
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        pointer-events-none group-hover:pointer-events-auto">
              

              <div class="flex items-center space-x-[5px] text-lg">
                <Icon name="fa6-solid:hat-wizard" class="text-gray-300" size="22"/>
                <span class="font-semibold text-gray-200">{{ user.wallet.secondaryA.toLocaleString() }}</span>
              </div>
              <div class="flex items-center space-x-[5px] text-lg">
                <Icon name="fa6-solid:crown" class="text-gray-300" size="22"/>
                <span class="font-semibold text-gray-200">{{ user.wallet.secondaryB.toLocaleString() }}</span>
              </div>

              <hr class="border-white/10">

              <button class="w-full flex items-center justify-center space-x-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg py-2 transition-colors">
                <Icon name="mdi:plus-circle" size="20"/>
                <span class="font-semibold text-sm">Nạp thêm</span>
              </button>
            </div>
          </div>

          <div class="flex items-center space-x-[5px] text-white">
            <button class="relative text-[#E4B764] xl:p-1">
              <Icon name="mdi:bell" size="24"/>
              <span class="absolute top-0 right-0  h-4 w-4 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">10</span>
            </button>
            <button class="relative text-[#E4B764] xl:p-1">
              <Icon name="mdi:email" size="24"/>
              <span class="absolute top-0 right-0  h-4 w-4 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">2</span>
            </button>
             <button class="text-[#E4B764] xl:p-1">
              <Icon name="mdi:calendar-check" size="24"/>
            </button>
          </div>
            <div class=" relative group">
              <NuxtLink to="/" class="relative">
             <div class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-sm"></div>
             <div class="relative w-[40px] h-[40px] rounded-full bg-black p-0.5">
               <img :src="user.avatar" alt="User Avatar" class="w-full h-full rounded-full object-cover">
             </div>
             <span class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gray-800 border-1 border-amber-400 text-white text-xs font-bold flex items-center justify-center">{{ user.level }}</span>
          </NuxtLink>
          <div class="absolute top-full right-0 w-[240px] mt-[1px] p-4 space-y-3
                        bg-gray-400/80 backdrop-blur-md text-black 
                        rounded-2xl shadow-lg z-10
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        pointer-events-none group-hover:pointer-events-auto">
              
                <div v-for="item in navData.profile" :key="item.id" class="flex items-center group space-x-[5px] text-lg hover:bg-gradient-to-b from-black to-[#5C5C5C] px-[10px] py-[8px] cursor-pointer hover:text-[#E4B764] rounded-full">
                   <div class="flex items-center space-x-[5px] text-lg">
                    <div class="relative w-[30px] h-[30px] flex justify-center items-center">
                       <Icon :name="item.icon"  size="22"/>
                    </div>
               
                <span class="text-[14px] uppercase">{{ item.title }}</span>
              </div>
                </div>
             
            </div>
          
            </div>
          

        </div>
      </div>
    </div>

    <div class="bg-black text-sm">
       <div class="container-full mx-auto flex items-center justify-between pt-[8px] pb-[12px]">
          <nav class="flex-1 flex 2xl:justify-center justify-end 2xl:pr-0 pr-[20px] ">
            <ul class="flex items-center xl:gap-x-[30px] gap-x-[16px]">
              <li v-for="link in navData.subNavBar" :key="link.id" class="hover:scale-[1.02] transition-all relative">
                <NuxtLink :to="link.linkTo" class="flex items-center space-x-[5px] text-gold1 hover:text-white transition-colors">
                  <Icon :name="link.icon" size="24" class=" text-[#E4B764] xl:text-[26px] text-[20]" />
                  <span>{{ link.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="flex items-center xl:space-x-[100px] space-x-[80px]">
            <button class="bg-white text-red-600 font-semibold px-4 py-1 rounded-full flex items-center space-x-2 text-xs">
             <Icon name="emojione:flag-for-vietnam" size="24"/>
              <span>TIẾNG VIỆT</span>
            </button>
            <button @click="toggleTheme" class="relative inline-flex items-center h-7 w-14 rounded-full bg-gray-700 transition-colors">
                <span :class="colorMode.value === 'dark' ? 'translate-x-7' : 'translate-x-0'" class="absolute left-0.5  w-6 h-6 transform rounded-full bg-amber-400 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <Icon v-if="colorMode.value === 'light'" name="mdi:weather-sunny" size="18" class="text-gray-900" />
                <Icon v-else name="mdi:weather-night" size="18" class="text-gray-900" />
                </span>
            </button>
          </div>
       </div>
    </div>
    </div>

    <div class="lg:hidden  relative w-full">
      <div class="absolute bg-black h-full md:w-[250px] w-[140px] left-0 top-0 z-50 flex items-center justify-end rounded-tr-[48px]">
        <NuxtLink to="/" class="md:text-[36px] text-[28px] font-semibold dark:text-[#E4B764] text-white pr-[20px]">
          LOGO
        </NuxtLink>
      </div>
      <div class="bg-gradient-to-r from-[#EADDA7] to-[#C3A159] flex items-center justify-end gap-x-[14px] px-[30px] py-[8px]">
        <NuxtLink to="/" class="h-[30px] bg-gray-900 text-white w-[30px] rounded-full flex items-center justify-center">
         <span class="text-14px">VN</span>
          </NuxtLink>
         <Icon name="gg:menu-round" @click="showMenu = true" size="32" class="text-gray-900" />
      </div>
      <div class="bg-black text-sm ">
<div class="flex justify-end items-center md:px-[30px] px-[10px] py-[8px] md:space-x-[20px] space-x-[8px]">
  <div>
    <NuxtLink v-for="item in navData.menu[0].subMenu" :key="item.id" :to="item.linkTo" class="hover:scale-[1.02] transition-all">
                  <img v-if="item.icon" :src="`_nuxt${item.icon}`" alt="icon" class="inline-block shrink-0 md:w-[46px] w-[34px] md:h-[34px] h-[26px]">
        
                </NuxtLink>
  </div>
  
   <button @click="toggleTheme" class="relative inline-flex items-center h-6 w-14 rounded-full bg-gray-700 transition-colors">
                <span :class="colorMode.value === 'dark' ? 'translate-x-7' : 'translate-x-0'" class="absolute left-0.5  w-6 h-6 transform rounded-full bg-amber-400 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <Icon v-if="colorMode.value === 'light'" name="mdi:weather-sunny" size="18" class="text-gray-900" />
                <Icon v-else name="mdi:weather-night" size="18" class="text-gray-900" />
                </span>
            </button>

            
</div>
      </div>
    </div>

     <div class="lg:hidden fixed z-50 top-0 w-full h-screen bg-[#FFF] transition-all"
    :class="showMenu ? 'menu-in' : 'menu-out'" >
 <div class="bg-gradient-to-r from-[#EADDA7] to-[#C3A159] flex items-center justify-between gap-x-[14px] px-[30px] py-[8px]">
   <div class=" relative group">
              <NuxtLink to="/" class="relative">
             <div class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-sm"></div>
             <div class="relative w-[40px] h-[40px] rounded-full bg-black p-0.5">
               <img :src="user.avatar" alt="User Avatar" class="w-full h-full rounded-full object-cover">
             </div>
           
          </NuxtLink>
          <div class="absolute top-full left-0 w-[240px] mt-[1px] p-4 space-y-3
                        bg-gray-400/80 backdrop-blur-md text-black 
                        rounded-2xl shadow-lg z-10
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        pointer-events-none group-hover:pointer-events-auto">
              
                <div v-for="item in navData.profile" :key="item.id" class="flex items-center group space-x-[5px] text-lg hover:bg-gradient-to-b from-black to-[#5C5C5C] px-[10px] py-[8px] cursor-pointer hover:text-[#E4B764] rounded-full">
                   <div class="flex items-center space-x-[5px] text-lg">
                    <div class="relative w-[30px] h-[30px] flex justify-center items-center">
                       <Icon :name="item.icon"  size="22"/>
                    </div>
               
                <span class="text-[14px] uppercase">{{ item.title }}</span>
              </div>
                </div>
             
            </div>
          
            </div>
    <Icon name="ic:round-cancel" @click="showMenu = false" size="32" class="text-gray-900" />

 </div>
 <div>
   <ul class="w-full text-sm font-semibold">
            <li v-for="link in navData.menu" :key="link.id" class="relative group px-[2px] border-b border-gray-300">
              <NuxtLink :to="link.linkTo" class=" uppercase  text-[12px] flex items-center py-[8px]  px-[16px]  z-20 relative">
                {{ link.title }}
              </NuxtLink>
              <div v-if="link.subMenu" class="hidden space-y-[5px] px-[5px] group-hover:block w-full" >
                <NuxtLink v-for="item in link.subMenu" :key="item.id" :to="item.linkTo" class="block uppercase px-[16px] py-[8px] border-t  text-sm  ">
                  <img v-if="item.icon" :src="`_nuxt${item.icon}`" alt="icon" class="inline-block shrink-0 w-[30px] h-[30px]">
                  {{ item.title }}
                </NuxtLink>
              </div>
            </li>
          </ul>
 </div>
 </div>

  </header>
</template>

<script setup>

import { ref } from 'vue';
const { data: headerData } = await useAsyncData('header-data', () => $fetch('/api/header'));
const navData = headerData.value || {};

const showMenu = ref(false)
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const user = ref({
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', 
  level: 20,
  wallet: {
    main: 1000,
    secondaryA: 20000,
    secondaryB: 20000,
  }
});


</script>

<style scoped>
.container {
  max-width: 1500px; /* Slightly wider for the new elements */
}

.text-gold1 {
 
  background: linear-gradient(to bottom, #F8E889 50%, #E4B764 50%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.icon3{
  background: linear-gradient(to bottom, #F8E889 50%, #E4B764 50%);
}
.menu-in{
  display: none;
}

.menu-out{
  display: none;
}

@media screen and (width <= 1020px) {
  .menu-in {
  right: 0;
  display: block;
  pointer-events: auto;
  animation: menuin 0.6s forwards;
}

.menu-out {
  right: -2000px;
  display: none;
  pointer-events: none;
  animation: menuout 0.8s forwards;
}
}


@keyframes menuin {
  from {
    right: -2000px;
  }

  to {
    right: 0;
  display: block;
  }
}

@keyframes menuout {
  from {
    right: 0;
    display: block;
  }

  to {
    right: -2000px;
  }
}

</style>