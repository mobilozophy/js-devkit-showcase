<template>
  <div class="bg-gray-100 min-h-screen p-8 flex justify-center items-center">
    <div class="bg-white rounded-lg shadow-2xl overflow-hidden w-full">
      <!-- Browser-like top bar -->
      <div class="bg-gray-200 px-4 py-2 flex items-center space-x-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <div class="flex-grow text-center text-sm text-gray-600">Timberhaven Lodge</div>
      </div>

      <!-- Address bar and navigation -->
      <div class="bg-gray-100 px-4 py-2 flex items-center space-x-2">
        <button @click="goBack" class="text-gray-600 hover:text-gray-800">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-1-1H7a1 1 0 000 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L10 9.414V11a1 1 0 102 0V7z" clip-rule="evenodd" />
          </svg>
        </button>
        <button @click="goForward" class="text-gray-600 hover:text-gray-800">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 011-1h3a1 1 0 010 2h-1.586l3.293 3.293a1 1 0 01-1.414 1.414L10 9.414V11a1 1 0 11-2 0V7z" clip-rule="evenodd" />
          </svg>
        </button>
        <input type="text" class="flex-grow px-2 py-1 border rounded" :value="currentUrl" readonly />
      </div>

      <!-- Scrollable content area -->
      <div class="overflow-y-auto max-h-[calc(100vh-8rem)]">
        <div class="bg-neutral font-sans">
          <header class="bg-primary text-neutral-50 py-6 sticky top-0 z-50">
            <div class="container mx-auto px-2 md:px-4">
              <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center mb-4 md:mb-0">
                  <img src="@/assets/images/TimberhavenLodgeLogo.png" alt="Timberhaven Lodge Logo" class="h-24 md:h-32 mr-4">
                  <h1 class="text-3xl md:text-4xl font-serif font-bold">Timberhaven Lodge</h1>
                </div>
                <nav class="flex-shrink-0">
                  <ul class="flex space-x-4 md:space-x-6">
                    <li><a href="#rooms" class="hover:text-secondary-light transition duration-300" data-intro="Check out our luxurious rooms!">Rooms</a></li>
                    <li><a href="#amenities" class="hover:text-secondary-light transition duration-300" data-intro="Explore our amazing amenities!">Amenities</a></li>
                    <li><a href="#contact" class="hover:text-secondary-light transition duration-300" data-intro="Get in touch with us!">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
    
          <main>
            <!-- Hero Section -->
            <section class="bg-cover bg-center h-screen flex items-center" style="background-image: url('https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');" data-intro="Welcome to Timberhaven Lodge!">
              <div class="container mx-auto px-2 md:px-4 text-center">
                <h2 class="text-5xl md:text-6xl font-serif font-bold text-white mb-4 shadow-text">Welcome to Timberhaven Lodge</h2>
                <p class="text-xl md:text-2xl text-white mb-8 shadow-text">Experience rustic luxury in the heart of nature</p>
                <div class="flex justify-center space-x-4">
                  <a href="#rooms" class="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-full transition duration-300">Explore Our Rooms</a>
                  <button @click="joinLoyaltyProgram" class="bg-primary-light hover:bg-primary text-white font-bold py-3 px-6 rounded-full transition duration-300" data-intro="Join our loyalty program for exclusive benefits!">Join Our Loyalty Program</button>
                </div>
              </div>
            </section>
    
            <!-- Rooms Section -->
            <section id="rooms" class="py-16 bg-white" data-intro="Here are our luxurious rooms.">
              <div class="container mx-auto px-2 md:px-4">
                <h2 class="text-4xl font-serif font-bold text-primary mb-8 text-center">Our Luxurious Accommodations</h2>
                <div class="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div v-for="room in rooms" :key="room.id" class="bg-neutral rounded-lg shadow-md overflow-hidden">
                    <img :src="room.image" :alt="room.name" class="w-full h-64 object-cover">
                    <div class="p-4 md:p-6">
                      <h3 class="text-2xl font-serif font-bold mb-2 text-primary">{{ room.name }}</h3>
                      <p class="text-accent mb-4">{{ room.description }}</p>
                      <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-secondary">${{ room.price }} / night</span>
                        <button @click="bookRoom(room)" class="mzcapi-add-item px-6 py-2 bg-secondary text-neutral-50 rounded hover:bg-secondary-light transition duration-300">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <!-- Amenities Section -->
            <section id="amenities" class="py-16 bg-neutral" data-intro="Discover our top-notch amenities.">
              <div class="container mx-auto px-2 md:px-4">
                <h2 class="text-4xl font-serif font-bold text-primary mb-8 text-center">Lodge Amenities</h2>
                <div class="grid md:grid-cols-3 gap-4 md:gap-8">
                  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-serif font-bold mb-4 text-primary">Farm-to-Table Dining</h3>
                    <p class="text-accent">Savor exquisite meals prepared with locally-sourced ingredients at our on-site restaurant, "The Timber Table."</p>
                  </div>
                  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-serif font-bold mb-4 text-primary">Nature Trails</h3>
                    <p class="text-accent">Explore miles of scenic hiking trails winding through pristine forests and alongside crystal-clear streams.</p>
                  </div>
                  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 class="text-2xl font-serif font-bold mb-4 text-primary">Wellness Center</h3>
                    <p class="text-accent">Rejuvenate your body and mind at our full-service spa and fitness center with panoramic forest views.</p>
                  </div>
                </div>
              </div>
            </section>
    
            <!-- Contact Section -->
            <section id="contact" class="py-16 bg-primary text-white" data-intro="Feel free to contact us anytime.">
              <div class="container mx-auto px-2 md:px-4">
                <h2 class="text-4xl font-serif font-bold mb-8 text-center">Contact Us</h2>
                <div class="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div>
                    <h3 class="text-2xl font-serif font-bold mb-4">Get in Touch</h3>
                    <p class="mb-4">We'd love to hear from you. Whether you have a question about our accommodations, amenities, or availability, our team is ready to assist you.</p>
                    <ul class="space-y-2">
                      <li>📞 Phone: (555) 123-4567</li>
                      <li>✉️ Email: info@timberhavenLodge.com</li>
                      <li>📍 Address: 123 Forest Road, Woodland, WA 98674</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-2xl font-serif font-bold mb-4">Follow Us</h3>
                    <p class="mb-4">Stay updated with our latest offers and events by following us on social media:</p>
                    <div class="flex space-x-6">
                      <!-- Add social media icons here -->
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import introJs from 'intro.js';
import 'intro.js/introjs.css';

export default {
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
      currentUrl: window.location.href
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