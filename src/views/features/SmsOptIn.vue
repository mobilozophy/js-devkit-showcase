<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-primary">SMS Opt-In</h1>
    <p class="mb-8 text-base">
      Mobilozophy's SMS Opt-In feature allows you to build and grow your SMS marketing list with ease. Implement compliant opt-in processes and engage your audience through text messaging.
    </p>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Implementation</h2>
      <p class="mb-4 text-base">To add an SMS opt-in form to your website, use the following code:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">&lt;div</span> <span class="text-blue-300">class</span>=<span class="text-orange-300">"mzcapi-sms-optin"</span> 
     <span class="text-blue-300">data-mz-account</span>=<span class="text-orange-300">"your_account_uuid"</span> 
     <span class="text-blue-300">data-mz-list</span>=<span class="text-orange-300">"your_list_uuid"</span><span class="text-pink-400">&gt;&lt;/div&gt;</span></code></pre>
      </div>
    </div>

    <!-- ... rest of the component ... -->

  </div>
</template>

<script>
export default {
  name: 'SmsOptIn'
}
</script>