<template>
  <div>
    <section class="mb-16">
      <h1 class="text-4xl font-bold mb-4">Welcome to Mobilozophy JS Demos</h1>
      <p class="text-gray-700 mb-8">
        At Mobilozophy, we believe in empowering businesses to connect with their customers in meaningful ways. Our mission is to provide innovative mobile solutions that drive growth and enhance customer experiences. We do this by offering ready-to-use embeddable JavaScript solutions that are easy to integrate and highly customizable.
      </p>
      <p class="text-gray-700 mb-8">
        Our platform showcases a variety of use cases and demos tailored for different verticals, demonstrating the flexibility and power of our technology. Explore our demos to see how Mobilozophy can transform your business operations and create lasting customer relationships.
      </p>
      <h2 class="mb-6 text-2xl font-semibold">General Demos</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <router-link to="/use-cases/hospitality" class="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <h3 class="mb-2 text-xl font-bold">Hotel Booking Demo</h3>
          <p class="text-gray-600">Showcase of a luxury hotel booking system integration.</p>
        </router-link>
        <a href="#" class="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <h3 class="mb-2 text-xl font-bold">E-Commerce Demo</h3>
          <p class="text-gray-600">Showcase of an art store e-commerce integration.</p>
        </a>
      </div>
    </section>

    <section>
      <h2 class="mb-6 text-2xl font-semibold">Customer Specific Demos</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a href="#" class="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <h3 class="mb-2 text-xl font-bold">Regency Hotel Management</h3>
          <p class="text-gray-600">Showcase of dining options for Regency Hotel Management.</p>
        </a>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="mb-6 text-2xl font-semibold">Sample Code</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a href="#" class="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <h3 class="mb-2 text-xl font-bold">Basic Integration</h3>
          <p class="text-gray-600">Simple example of integrating Mobilozophy JS into a webpage.</p>
        </a>
        <a href="#" class="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <h3 class="mb-2 text-xl font-bold">Advanced Features</h3>
          <p class="text-gray-600">Showcase of advanced Mobilozophy JS features and customizations.</p>
        </a>
      </div>
    </section>
  </div>
</template>