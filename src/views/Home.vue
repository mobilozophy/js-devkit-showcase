<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">Empower Your Customer Engagement with Mobilozophy</h1>
          <p class="text-xl mb-8">Seamlessly integrate powerful marketing tools into your website with our JavaScript library. Boost conversions, enhance user experience, and drive growth.</p>
          <a href="#features" class="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-light transition duration-300">Explore Features</a>
        </div>
      </div>
    </section>

    <!-- Key Benefits Section -->
    <section class="py-16" id="features">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-secondary">Why Choose Mobilozophy?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
            <h3 class="text-xl font-semibold mb-4 text-primary">Easy Integration</h3>
            <p class="text-gray-600">Add our powerful tools to your site with just a few lines of code. No complex setup required.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
            <h3 class="text-xl font-semibold mb-4 text-secondary">Comprehensive Suite</h3>
            <p class="text-gray-600">Access forms, SMS opt-in, loyalty programs, coupons, and analytics all through one integration.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
            <h3 class="text-xl font-semibold mb-4 text-base">Data-Driven Insights</h3>
            <p class="text-gray-600">Leverage our CDP to gain deep insights into customer behavior and preferences.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Showcase -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-secondary">Powerful Features at Your Fingertips</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.name" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-primary">{{ feature.name }}</h3>
            <p class="mb-4 text-gray-600">{{ feature.description }}</p>
            <router-link :to="feature.link" class="text-secondary font-semibold hover:text-base">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-16 bg-secondary text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          <p class="text-lg italic mb-4">"Mobilozophy's JavaScript integration has revolutionized our customer engagement strategy. The ease of implementation and powerful features have significantly boosted our conversion rates."</p>
          <p class="font-semibold text-primary">- Jane Doe, CEO of TechCorp</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Customer Engagement?</h2>
        <p class="text-xl mb-8">Get started with Mobilozophy today and see the difference for yourself.</p>
        <router-link to="/getting-started" class="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-light transition duration-300">Get Started Now</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  { name: 'Dynamic Forms', description: 'Create and manage customizable forms for lead capture and surveys.', link: '/features/forms' },
  { name: 'SMS Opt-In', description: 'Grow your SMS marketing list with easy-to-implement opt-in functionality.', link: '/features/sms-opt-in' },
  { name: 'Loyalty Programs', description: 'Reward your customers and drive repeat business with built-in loyalty features.', link: '/features/loyalty' },
  { name: 'Digital Coupons', description: 'Boost sales with targeted digital coupon campaigns.', link: '/features/coupons' },
  { name: 'Advanced Analytics', description: 'Gain valuable insights into customer behavior and campaign performance.', link: '/features/analytics' },
  { name: 'Event Tracking', description: 'Monitor and analyze key user interactions on your website.', link: '/features/events' },
]
</script>