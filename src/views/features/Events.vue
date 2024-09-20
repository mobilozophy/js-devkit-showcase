<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-primary">Event Tracking</h1>
    <p class="mb-8 text-base">
      Mobilozophy's Event Tracking feature allows you to monitor and analyze key user interactions on your website. This powerful tool provides valuable insights into user behavior, helping you make data-driven decisions to improve your customer engagement strategies.
    </p>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">How It Works</h2>
      <p class="mb-4 text-base">
        Our event tracking system is designed to be flexible and easy to implement. You can track various types of events, such as page views, button clicks, form submissions, and custom events specific to your business needs.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Implementation</h2>
      <p class="mb-4 text-base">To track an event, use the following JavaScript code:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">window</span>.<span class="text-blue-300">mzcapi</span>.<span class="text-yellow-300">trackEvent</span>(<span class="text-orange-300">'eventName'</span>, {
  <span class="text-green-300">// Additional event properties</span>
  <span class="text-blue-300">property1</span>: <span class="text-orange-300">'value1'</span>,
  <span class="text-blue-300">property2</span>: <span class="text-orange-300">'value2'</span>
});</code></pre>
      </div>
    </div>

    <!-- ... rest of the component ... -->

  </div>
</template>

<script>
export default {
  name: 'Events'
}
</script>