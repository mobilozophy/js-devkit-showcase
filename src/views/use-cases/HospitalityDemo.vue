<template>
  <div class="min-h-screen p-4 flex flex-col items-center justify-start" :style="{ backgroundImage: !isMobileView ? 'url(\'https://images.unsplash.com/photo-1687042277586-971369d3d241?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')' : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="mb-4 bg-slate-800 rounded-lg shadow-lg p-4">
      <div class="flex items-center space-x-2">
        <button @click="toggleView" :class="{'bg-blue-500': !isMobileView, 'bg-gray-600': isMobileView}" class="px-4 py-2 text-sm text-white rounded-md hover:bg-opacity-80 transition duration-300 flex items-center justify-center w-1/2">
          <ComputerDesktopIcon class="h-5 w-5 mr-2" />
          Desktop
        </button>
        <button @click="toggleView" :class="{'bg-blue-500': isMobileView, 'bg-gray-600': !isMobileView}" class="px-4 py-2 text-sm text-white rounded-md hover:bg-opacity-80 transition duration-300 flex items-center justify-center w-1/2">
          <DevicePhoneMobileIcon class="h-5 w-5 mr-2" />
          Mobile
        </button>
      </div>
    </div>
    <div class="mb-8" :class="{'bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-6xl': !isMobileView, 'bg-black rounded-[60px] shadow-2xl overflow-hidden w-full max-w-[375px] h-[800px] border-[14px] border-black': isMobileView}">
      <!-- Safari-like top bar for desktop -->
      <div v-if="!isMobileView" class="bg-gray-100 px-4 py-2 flex flex-col">
        <!-- Window management dots -->
        <div class="flex items-center space-x-2 mb-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="flex items-center justify-center relative">
          <div class="absolute left-0 flex items-center space-x-1">
            <button class="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200">
              <ArrowLeftIcon class="w-4 h-4" />
            </button>
            <button class="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200">
              <ArrowRightIcon class="w-4 h-4" />
            </button>
          </div>
          <div class="w-2/3 px-2 py-1 bg-white rounded-md flex items-center">
            <LockClosedIcon class="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" class="w-full bg-transparent text-black text-sm outline-none" :value="currentUrl" readonly />
          </div>
          <div class="absolute right-0 flex items-center space-x-2">
            <button class="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200">
              <ShareIcon class="w-4 h-4" />
            </button>
            <button class="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200">
              <PlusIcon class="w-4 h-4" />
            </button>
            <button class="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200">
              <ViewColumnsIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- iPhone-like top bar for mobile with notch and Dynamic Island -->
      <div v-else class="bg-[#064e3b] relative">
        <div class="h-12 flex items-center justify-between px-6">
          <div class="text-white text-sm">9:41</div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-2xl flex items-center justify-center">
            <!-- Dynamic Island -->
            <div class="w-28 h-6 bg-black rounded-lg flex items-center justify-center text-white text-xs">
              Dynamic Island
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Scrollable content area -->
      <div class="overflow-y-auto" :class="{'max-h-[calc(100vh-8rem)]': !isMobileView, 'max-h-[calc(800px-12rem)]': isMobileView}">
        <div class="bg-[#e5e7eb] font-sans">
          <header class="bg-[#064e3b] text-[#e5e7eb] py-2 sticky top-0 z-50">
            <div class="container mx-auto px-2">
              <div class="flex flex-col items-center">
                <div class="flex items-center mb-2">
                  <img src="@/assets/images/TimberhavenLodgeLogo.png" alt="Timberhaven Lodge Logo" class="h-5 mr-2">
                  <h1 class="text-sm font-serif font-bold">Timberhaven Lodge</h1>
                </div>
                <nav class="flex-shrink-0 overflow-x-auto w-full">
                  <ul class="flex justify-center space-x-1">
                    <li><a href="#rooms" class="hover:text-[#d97706] transition duration-300 flex items-center text-[10px]" data-intro="We can point out various features we have embedded in the page... Giving a tour of the what are use cases are..."><HomeIcon class="w-2 h-2 mr-1" />Rooms</a></li>
                    <li><a href="#amenities" class="hover:text-[#d97706] transition duration-300 flex items-center text-[10px]"><SparklesIcon class="w-2 h-2 mr-1" />Amenities</a></li>
                    <li><a href="#contact" class="hover:text-[#d97706] transition duration-300 flex items-center text-[10px]"><PhoneIcon class="w-2 h-2 mr-1" />Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
    
          <main>
            <!-- Hero Section -->
            <section class="bg-cover bg-center min-h-[50vh] flex items-center" style="background-image: url('https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');">
              <div class="container mx-auto px-4 text-center">
                <h2 class="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-2 shadow-text">Welcome to Timberhaven Lodge</h2>
                <p class="text-xs sm:text-sm text-white mb-4 shadow-text">Experience rustic luxury in the heart of nature</p>
                <div class="flex flex-col space-y-2">
                  <a href="#rooms" class="bg-[#b45309] hover:bg-[#d97706] text-white font-bold py-1 px-3 rounded-md transition duration-300 flex items-center justify-center text-xs"><HomeIcon class="w-3 h-3 mr-1" />Explore Our Rooms</a>
                  <button @click="joinLoyaltyProgram" class="bg-[#047857] hover:bg-[#064e3b] text-white font-bold py-1 px-3 rounded-md transition duration-300 flex items-center justify-center text-xs"><UserGroupIcon class="w-3 h-3 mr-1" />Join Our Loyalty Program</button>
                </div>
              </div>
            </section>
    
            <!-- Rooms Section -->
            <section id="rooms" class="py-8 bg-white">
              <div class="container mx-auto px-4">
                <h2 class="text-base sm:text-lg font-serif font-bold text-[#064e3b] mb-4 text-center">Our Luxurious Accommodations</h2>
                <div :class="{'grid gap-4 grid-cols-1': isMobileView, 'grid gap-4 grid-cols-2': !isMobileView}">
                  <div v-for="room in rooms" :key="room.id" class="bg-[#e5e7eb] rounded-md shadow-md overflow-hidden">
                    <img :src="room.image" :alt="room.name" class="w-full h-32 object-cover">
                    <div class="p-3">
                      <h3 class="text-sm font-serif font-bold mb-1 text-[#064e3b]">{{ room.name }}</h3>
                      <p class="text-[#374151] mb-2 text-xs">{{ room.description }}</p>
                      <div class="flex flex-col items-center">
                        <span class="text-sm font-bold text-[#b45309] mb-1">${{ room.price }} / night</span>
                        <button @click="bookRoom(room)" class="mzcapi-add-item w-full px-4 py-1 bg-[#b45309] text-[#e5e7eb] rounded-md hover:bg-[#d97706] transition duration-300 flex items-center justify-center text-xs">
                          <ShoppingCartIcon class="w-3 h-3 mr-1" />Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <!-- Amenities Section -->
            <section id="amenities" class="py-8 bg-[#e5e7eb]">
              <div class="container mx-auto px-4">
                <h2 class="text-base sm:text-lg font-serif font-bold text-[#064e3b] mb-4 text-center">Lodge Amenities</h2>
                <div :class="{'grid gap-4 grid-cols-1': isMobileView, 'grid gap-4 grid-cols-3': !isMobileView}">
                  <div class="bg-white p-3 rounded-md shadow-md">
                    <h3 class="text-xs sm:text-sm font-serif font-bold mb-2 text-[#064e3b] flex items-center"><CakeIcon class="w-3 h-3 mr-1" />Farm-to-Table Dining</h3>
                    <p class="text-[#374151] text-[10px] sm:text-xs">Savor exquisite meals prepared with locally-sourced ingredients at our on-site restaurant, "The Timber Table."</p>
                  </div>
                  <div class="bg-white p-3 rounded-md shadow-md">
                    <h3 class="text-xs sm:text-sm font-serif font-bold mb-2 text-[#064e3b] flex items-center"><MapIcon class="w-3 h-3 mr-1" />Nature Trails</h3>
                    <p class="text-[#374151] text-[10px] sm:text-xs">Explore miles of scenic hiking trails winding through pristine forests and alongside crystal-clear streams.</p>
                  </div>
                  <div class="bg-white p-3 rounded-md shadow-md">
                    <h3 class="text-xs sm:text-sm font-serif font-bold mb-2 text-[#064e3b] flex items-center"><HeartIcon class="w-3 h-3 mr-1" />Wellness Center</h3>
                    <p class="text-[#374151] text-[10px] sm:text-xs">Rejuvenate your body and mind at our full-service spa and fitness center with panoramic forest views.</p>
                  </div>
                </div>
              </div>
            </section>
    
            <!-- Contact Section -->
            <section id="contact" class="py-8 bg-[#064e3b] text-white">
              <div class="container mx-auto px-4">
                <h2 class="text-base sm:text-lg font-serif font-bold mb-4 text-center">Contact Us</h2>
                <div :class="{'grid gap-4 grid-cols-1': isMobileView, 'grid gap-4 grid-cols-2': !isMobileView}">
                  <div>
                    <h3 class="text-sm font-serif font-bold mb-2 flex items-center"><EnvelopeIcon class="w-3 h-3 mr-1" />Get in Touch</h3>
                    <p class="mb-2 text-[10px] sm:text-xs">We'd love to hear from you. Whether you have a question about our accommodations, amenities, or availability, our team is ready to assist you.</p>
                    <ul class="space-y-1 text-[10px] sm:text-xs">
                      <li class="flex items-center"><PhoneIcon class="w-2 h-2 mr-1" />Phone: (555) 123-4567</li>
                      <li class="flex items-center"><EnvelopeIcon class="w-2 h-2 mr-1" />Email: info@timberhavenLodge.com</li>
                      <li class="flex items-center"><MapPinIcon class="w-2 h-2 mr-1" />Address: 123 Forest Road, Woodland, WA 98674</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-sm font-serif font-bold mb-2 flex items-center"><UserGroupIcon class="w-3 h-3 mr-1" />Follow Us</h3>
                    <p class="mb-2 text-[10px] sm:text-xs">Stay updated with our latest offers and events by following us on social media:</p>
                    <div class="flex space-x-4">
                      <!-- Add social media icons here -->
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      
      <!-- iOS Safari-like bottom bar for mobile -->
      <div v-if="isMobileView" class="bg-gray-100 px-4 py-2 flex flex-col mb-16">
        <div class="flex items-center space-x-2 mb-2">
          <input type="text" class="flex-grow px-2 py-1 border rounded bg-white text-black text-xs" :value="currentUrl" readonly />
        </div>
        <div class="flex items-center justify-between">
          <button @click="goBack" class="text-gray-600 hover:text-gray-800">
            <ArrowLeftIcon class="w-5 h-5" />
          </button>
          <button @click="goForward" class="text-gray-600 hover:text-gray-800">
            <ArrowRightIcon class="w-5 h-5" />
          </button>
          <button class="text-gray-600 hover:text-gray-800">
            <ShareIcon class="w-5 h-5" />
          </button>
          <button class="text-gray-600 hover:text-gray-800">
            <BookmarkIcon class="w-5 h-5" />
          </button>
          <button class="text-gray-600 hover:text-gray-800">
            <DocumentDuplicateIcon class="w-5 h-5" />
          </button>
        </div>
        <div class="mt-4 h-1 rounded-full">
          <div class="h-1 bg-gray-500 rounded-full w-1/3 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
  SparklesIcon,
  PhoneIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  CakeIcon,
  MapIcon,
  HeartIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShareIcon,
  BookmarkIcon,
  DocumentDuplicateIcon,
  PlusIcon,
  ViewColumnsIcon,
  LockClosedIcon
} from '@heroicons/vue/24/outline'

export default {
  components: {
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    HomeIcon,
    SparklesIcon,
    PhoneIcon,
    UserGroupIcon,
    ShoppingCartIcon,
    CakeIcon,
    MapIcon,
    HeartIcon,
    EnvelopeIcon,
    MapPinIcon,
    ShareIcon,
    BookmarkIcon,
    DocumentDuplicateIcon,
    PlusIcon,
    ViewColumnsIcon,
    LockClosedIcon
  },
  data() {
    return {
      rooms: [
        {
          id: 1,
          name: 'Rustic Retreat Suite',
          description: 'Immerse yourself in nature with our spacious suite featuring panoramic forest views and a private balcony.',
          price: 299,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: 2,
          name: 'Woodland Luxury Cabin',
          description: 'Experience the perfect blend of rustic charm and modern luxury in our standalone cabin.',
          price: 499,
          image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
        },
      ],
      currentUrl: window.location.href,
      isMobileView: false
    };
  },
  methods: {
    bookRoom(room) {
      alert(`Booking ${room.name} for $${room.price} per night`);
      // Here you would typically integrate with your booking system
    },
    goBack() {
      window.history.back();
    },
    goForward() {
      window.history.forward();
    },
    joinLoyaltyProgram() {
      alert('Thank you for joining our loyalty program!');
      // Here you would typically integrate with your loyalty program system
    },
    startTour() {
      introJs().start();
    },
    toggleView() {
      this.isMobileView = !this.isMobileView;
    }
  },
  mounted() {
    this.startTour();
  }
}
</script>

<style scoped>
.shadow-text {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
</style>
