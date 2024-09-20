<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-8 text-4xl font-bold text-primary">Mobilozophy JavaScript Integration Guide</h1>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Why Integrate Mobilozophy?</h2>
      <p class="mb-4 text-base">
        Mobilozophy's JavaScript library offers a seamless solution for businesses seeking to enhance their customer engagement without complex development. Our integration process is designed to be straightforward and efficient, allowing you to focus on your core business while leveraging advanced marketing capabilities.
      </p>
      <p class="mb-4 text-base">
        By integrating our JavaScript library, you gain access to a suite of powerful tools including customizable forms, SMS opt-in functionality, loyalty programs, and analytics - all through a simple script addition to your website.
      </p>
      <p class="mb-4 text-base">
        <strong>Key Benefits:</strong> Easy implementation, immediate access to advanced features, and the ability to create sophisticated customer engagement strategies without extensive technical knowledge or resources.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Introduction</h2>
      <p class="mb-4 text-base">
        Welcome to the Mobilozophy JavaScript integration guide. Our powerful JavaScript library is the culmination of our mission - it allows you to easily add customer engagement features to your website, including forms, SMS opt-in, loyalty programs, coupons, and analytics. We've designed it with both developers and business owners in mind, ensuring a straightforward implementation regardless of your technical expertise.
      </p>
      <p class="mb-4 text-base">
        <strong>What does it do?</strong> The Mobilozophy JavaScript library seamlessly integrates our suite of marketing and customer engagement tools into your existing website. This means you can leverage advanced features without complex backend development, aligning perfectly with our goal of simplifying customer engagement technology.
      </p>
      <p class="mb-4 text-base">
        <strong>Required Skills:</strong> We believe in accessibility, which is why we've made our integration process as simple as possible. If you have a basic understanding of HTML and know how to edit your website's source code, you're ready to integrate Mobilozophy. Our aim is to empower you, regardless of your technical background.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Integration Steps</h2>
      <p class="mb-4 text-base">Follow these simple steps to integrate the Mobilozophy JavaScript library into your website and start your journey towards enhanced customer engagement:</p>

      <ol class="mb-6 list-decimal list-inside">
        <li class="mb-4">
          <strong class="text-primary">Add the Mobilozophy JavaScript:</strong>
          <p class="mt-2 text-base">Copy and paste this script just before the closing <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">&lt;/body&gt;</code> tag of your HTML:</p>
          <div class="mt-2 bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code><span class="text-pink-400">&lt;script&gt;</span>
    <span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapiConfig</span> = {
        <span class="text-green-300">domain</span>: <span class="text-orange-300">'{{ mzcapiConfig?.domain || 'YOUR_ACCOUNT_DOMAIN' }}'</span>, <span class="text-gray-500">// Replace with your Account Domain</span>
        <span class="text-green-300">api_url</span>: <span class="text-orange-300">'{{ mzcapiConfig?.api_url || 'https://mzcapi.test/api' }}'</span>,
        <span class="text-green-300">verboseLogging</span>: <span class="text-purple-300">{{ mzcapiConfig?.verboseLogging ?? true }}</span> <span class="text-gray-500">// Set to false in production</span>
    };

    (<span class="text-yellow-300">function</span>() {
        <span class="text-purple-300">var</span> <span class="text-blue-300">script</span> = <span class="text-yellow-300">document</span>.<span class="text-blue-300">createElement</span>(<span class="text-orange-300">'script'</span>);
        <span class="text-blue-300">script</span>.<span class="text-green-300">src</span> = <span class="text-orange-300">'https://js.mzcapi.com/embed.js'</span>;
        <span class="text-yellow-300">document</span>.<span class="text-blue-300">head</span>.<span class="text-blue-300">appendChild</span>(<span class="text-blue-300">script</span>);
    })();
<span class="text-pink-400">&lt;/script&gt;</span></code></pre>
          </div>
        </li>
      </ol>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Features Unlocked</h2>
      <p class="mb-4 text-base">By adding this simple script, you've unlocked a powerful suite of features, each designed to enhance your customer engagement strategy:</p>
      <ul class="list-disc list-inside text-base">
        <li class="mb-2"><router-link to="/features/forms" class="text-blue-600 hover:underline">Forms</router-link>: Easily embed and manage customizable forms for lead capture and surveys, helping you understand your customers better.</li>
        <li class="mb-2"><router-link to="/features/sms-opt-in" class="text-blue-600 hover:underline">SMS Opt-in</router-link>: Implement SMS marketing campaigns with user-friendly opt-in functionality, opening a direct communication channel with your audience.</li>
        <li class="mb-2"><router-link to="/features/loyalty" class="text-blue-600 hover:underline">Loyalty Programs</router-link>: Engage customers with points-based or tiered loyalty systems, fostering long-term relationships and repeat business.</li>
        <li class="mb-2"><router-link to="/features/coupons" class="text-blue-600 hover:underline">Coupons</router-link>: Distribute and manage digital coupons to drive sales and incentivize customer actions.</li>
        <li class="mb-2"><router-link to="/features/analytics" class="text-blue-600 hover:underline">Analytics</router-link>: Gain insights into user behavior and campaign performance, allowing you to make data-driven decisions.</li>
      </ul>
      <p class="mt-4 text-base">All these features are now at your fingertips through simple JavaScript calls, embodying our commitment to providing powerful tools without the need for complex integrations.</p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Debugging and Verbose Logging</h2>
      <p class="mb-4 text-base">To aid in development and troubleshooting, we've included powerful debugging tools:</p>
      
      <h3 class="mt-6 mb-2 text-xl font-semibold text-secondary">Console Output</h3>
      <p class="mb-4 text-base">With verbose logging enabled, you'll see detailed information in your browser's console. Here's how to access the console:</p>
      
      <ol class="list-decimal list-inside mb-4 text-base">
        <li class="mb-2">Right-click anywhere on your web page and select "Inspect" or "Inspect Element".</li>
        <li class="mb-2">In the Developer Tools window that opens, click on the "Console" tab.</li>
        <li class="mb-2">Alternatively, you can use these keyboard shortcuts:
          <ul class="list-disc list-inside ml-6">
            <li>Chrome/Firefox/Edge (Windows/Linux): Ctrl + Shift + J</li>
            <li>Chrome/Firefox/Edge (Mac): Cmd + Option + J</li>
            <li>Safari (Mac): Cmd + Option + C</li>
          </ul>
        </li>
      </ol>

      <p class="mb-4 text-base">Once in the console, you'll see output similar to this:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300"><code><span class="text-green-300">Verbose logging is enabled.</span>
<span class="text-blue-300">Resolved domainName:</span> {{ mzcapiConfig?.domain || 'YOUR_ACCOUNT_DOMAIN' }}
<span class="text-blue-300">Updated Config options:</span> Object
<span class="text-blue-300">Initializing mzCONNECT with configuration:</span> Object
<span class="text-blue-300">Establishing session with mzCONNECT</span>
<span class="text-blue-300">Retrieving feature flags from localStorage</span>
<span class="text-yellow-300">=====Tracking page view with params:</span> Object
<span class="text-blue-300">Resolved location:</span> Location
<span class="text-blue-300">Hostname:</span> https://js-site.test
<span class="text-blue-300">Pathname to send:</span> /dev-static-site/sample-code/basic-integration.html
<span class="text-blue-300">Encoded parameters:</span> ?h=https%3A%2F%2Fjs-site.test&p=%2Fdev-static-site%2F
sample-code%2Fbasic-integration.html&r=&sid=f3ef6a5e-91e5-41be-9183-bf27c4d408a0&
qs=%7B%7D&cid=43179336
<span class="text-blue-300">Sending tracking request with params:</span> Object
<span class="text-green-300">Pageview tracking data sent:</span> Object</code></pre>
      </div>
      
      <h3 class="mt-6 mb-2 text-xl font-semibold text-secondary">Debug Widget</h3>
      <p class="mb-4 text-base">A debug widget will appear at the bottom-left corner of your screen when verbose logging is enabled:</p>
      <div class="mb-4">
        <h4 class="mb-2 text-lg font-semibold">Debug Widget Location:</h4>
        <div class="border-2 border-gray-300 rounded-lg overflow-hidden" style="width: 100%; max-width: 600px;">
          <!-- Browser chrome -->
          <div class="bg-gray-200 p-2 flex items-center space-x-2">
            <div class="flex space-x-1">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="flex-grow bg-white rounded px-2 py-1 text-sm text-gray-600">https://example.com</div>
          </div>
          <!-- Browser content area with overlay -->
          <div class="bg-white p-4 h-64 relative">
            <div class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div class="text-gray-400 text-xl">Your website content here</div>
            </div>
            <!-- Debug widget button positioned at bottom-left with highlight circle -->
            <div class="absolute bottom-4 left-4 bg-fuchsia-700 rounded-md px-3 py-2 shadow-sm">
              <button class="mzcapi-debug-toggle relative flex items-center  text-white z-10">
                <svg class="mzcapi-debug-icon w-6 h-6 mr-2" viewBox="0 0 1285 1310" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_1002_2" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="1285" height="1310">
                    <path d="M0 0H96.3806V987.849H0V0ZM136.526 0H224.869V987.849H136.526V0ZM289.128 0H473.851V987.849H289.128V0ZM554.157 0H610.378V987.849H554.157V0ZM626.439 0H754.942V987.849H626.439V0ZM827.224 0H947.689V987.849H827.224V0ZM1003.91 0H1068.15V1100.29H1003.91V0ZM1100.29 0H1148.47V1180.6H1100.29V0ZM1164.53 0H1285V1309.1H1164.53V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_1002_2)">
                    <path d="M1096.55 0H185.019C85.6545 0 0 80.5588 0 173.983V811.979C0 905.432 85.6685 985.976 185.047 985.976H962.905L1285 1301.75V173.998C1285 80.5588 1202.77 0 1096.55 0Z" fill="currentColor"/>
                  </g>
                </svg>
                <span class="mzcapi-debug-text">MZJS Debug</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-4 text-base">Clicking this button opens a debug window with the following information:</p>
      <div class="p-4 bg-white rounded-lg border-2 border-red-500 shadow-lg">
        <h3 class="mb-2 text-lg font-bold">mzCAPI JavaScript Debugger</h3>
        <div class="p-2 text-sm text-gray-700 bg-gray-100">
          <span class="font-semibold">Session ID:</span> d3d20c89-d6a7-49fe-a72f-204dc06ed2be
        </div>
        <div class="p-2 text-sm text-gray-700 bg-white">
          <span class="font-semibold">Features:</span> {
          "analytics": true,
          "coupons": true,
          "loyalty": true,
          "cart": false,
          "forms": true
          }
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-accent bg-opacity-20 rounded-lg border-2 border-accent">
        <p class="text-secondary"><strong>Note:</strong> While verbose logging is invaluable during development and testing, it's recommended to disable it in production environments for optimal performance and to prevent sensitive information from being exposed.</p>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Integrating with Single Page Applications (SPAs)</h2>
      <p class="mb-4 text-base">
        When incorporating Mobilozophy JS into Single Page Applications, additional steps are required to maintain functionality across route changes. Here are specific guidelines for Vue.js and React projects:
      </p>

      <h3 class="mb-2 text-xl font-semibold text-secondary">Vue.js Integration</h3>
      <ol class="list-decimal list-inside mb-4 text-base">
        <li class="mb-2">
          <strong>Router Configuration:</strong>
          <p class="mt-2">Modify your Vue Router setup (typically in <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">router/index.js</code>):</p>
          <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto mt-2">
            <pre class="text-sm text-gray-300"><code><span class="text-pink-400">import</span> { createRouter, createWebHistory } <span class="text-pink-400">from</span> <span class="text-orange-300">'vue-router'</span>

<span class="text-yellow-300">const</span> <span class="text-blue-300">router</span> = createRouter({
  history: createWebHistory(),
  routes: [
    <span class="text-gray-500">// your routes here</span>
  ]
})

router.<span class="text-blue-300">afterEach</span>(<span class="text-yellow-300">()</span> => {
  <span class="text-gray-500">// Ensure DOM update before Mobilozophy reinitialization</span>
  Vue.<span class="text-blue-300">nextTick</span>(<span class="text-yellow-300">()</span> => {
    <span class="text-pink-400">if</span> (<span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>?.<span class="text-blue-300">triggerPageRefresh</span>) {
      <span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>.<span class="text-blue-300">triggerPageRefresh</span>()
    }
  })
})

<span class="text-pink-400">export default</span> router</code></pre>
          </div>
        </li>
        <li class="mb-2">
          <strong>App-wide Integration:</strong>
          <p class="mt-2">In your main App component (<code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">App.vue</code>):</p>
          <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto mt-2">
            <pre class="text-sm text-gray-300"><code><span class="text-pink-400">&lt;script setup&gt;</span>
<span class="text-pink-400">import</span> { onMounted, onUnmounted } <span class="text-pink-400">from</span> <span class="text-orange-300">'vue'</span>

<span class="text-yellow-300">const</span> <span class="text-blue-300">triggerPageRefreshHandler</span> = <span class="text-yellow-300">()</span> => {
  <span class="text-pink-400">if</span> (<span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>?.<span class="text-blue-300">triggerPageRefresh</span>) {
    <span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>.<span class="text-blue-300">triggerPageRefresh</span>()
  }
}

onMounted(<span class="text-yellow-300">()</span> => {
  <span class="text-yellow-300">window</span>.<span class="text-blue-300">addEventListener</span>(<span class="text-orange-300">'mzcapiTriggerPageRefresh'</span>, triggerPageRefreshHandler)
})

onUnmounted(<span class="text-yellow-300">()</span> => {
  <span class="text-yellow-300">window</span>.<span class="text-blue-300">removeEventListener</span>(<span class="text-orange-300">'mzcapiTriggerPageRefresh'</span>, triggerPageRefreshHandler)
})
<span class="text-pink-400">&lt;/script&gt;</span></code></pre>
          </div>
        </li>
      </ol>

      <h3 class="mb-2 text-xl font-semibold text-secondary">React Integration</h3>
      <ol class="list-decimal list-inside mb-4 text-base">
        <li class="mb-2">
          <strong>Router Setup:</strong>
          <p class="mt-2">For React Router users, update your main App.js or routing component:</p>
          <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto mt-2">
            <pre class="text-sm text-gray-300"><code><span class="text-pink-400">import</span> { useEffect } <span class="text-pink-400">from</span> <span class="text-orange-300">'react'</span>
<span class="text-pink-400">import</span> { useLocation } <span class="text-pink-400">from</span> <span class="text-orange-300">'react-router-dom'</span>

<span class="text-yellow-300">function</span> <span class="text-blue-300">App</span>() {
  <span class="text-yellow-300">const</span> location = useLocation()

  useEffect(<span class="text-yellow-300">()</span> => {
    <span class="text-pink-400">if</span> (<span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>?.<span class="text-blue-300">triggerPageRefresh</span>) {
      <span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>.<span class="text-blue-300">triggerPageRefresh</span>()
    }
  }, [location])

  <span class="text-pink-400">return</span> (
    <span class="text-gray-500">// Your app components</span>
  )
}

<span class="text-pink-400">export default</span> <span class="text-blue-300">App</span></code></pre>
          </div>
        </li>
        <li class="mb-2">
          <strong>Component-level Integration:</strong>
          <p class="mt-2">For components requiring element refresh:</p>
          <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto mt-2">
            <pre class="text-sm text-gray-300"><code><span class="text-pink-400">import</span> { useEffect } <span class="text-pink-400">from</span> <span class="text-orange-300">'react'</span>

<span class="text-yellow-300">function</span> <span class="text-blue-300">MyComponent</span>() {
  useEffect(<span class="text-yellow-300">()</span> => {
    <span class="text-yellow-300">const</span> <span class="text-blue-300">triggerPageRefreshHandler</span> = <span class="text-yellow-300">()</span> => {
      <span class="text-pink-400">if</span> (<span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>?.<span class="text-blue-300">triggerPageRefresh</span>) {
        <span class="text-yellow-300">window</span>.<span class="text-blue-300">mzcapi</span>.<span class="text-blue-300">triggerPageRefresh</span>()
      }
    }

    <span class="text-yellow-300">window</span>.<span class="text-blue-300">addEventListener</span>(<span class="text-orange-300">'mzcapiTriggerPageRefresh'</span>, triggerPageRefreshHandler)

    <span class="text-pink-400">return</span> <span class="text-yellow-300">()</span> => {
      <span class="text-yellow-300">window</span>.<span class="text-blue-300">removeEventListener</span>(<span class="text-orange-300">'mzcapiTriggerPageRefresh'</span>, triggerPageRefreshHandler)
    }
  }, [])

  <span class="text-pink-400">return</span> (
    <span class="text-gray-500">// Your component JSX</span>
  )
}

<span class="text-pink-400">export default</span> <span class="text-blue-300">MyComponent</span></code></pre>
          </div>
        </li>
      </ol>

      <h3 class="mb-2 text-xl font-semibold text-secondary">Best Practices for Both Frameworks</h3>
      <ul class="list-disc list-inside mb-4 text-base">
        <li>Initialization: Ensure window.mzcapi.init() is called post-script loading. This is typically automatic, but verify in your setup.</li>
        <li>Custom Elements: Implement refresh logic for custom elements in the mzcapi.refreshCustomElements method.</li>
        <li>Third-party Scripts: Add reinitialization logic for external scripts in mzcapi.reinitializeThirdPartyScripts.</li>
        <li>Dynamic Content: Update mzcapi.updateDynamicContent to handle route/page-specific content changes.</li>
        <li>Error Handling: Wrap window.mzcapi method calls in try-catch blocks to manage potential script loading delays.</li>
        <li>Performance: Optimize by refreshing only necessary elements, avoiding unnecessary re-renders.</li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Next Steps</h2>
      <p class="mb-4 text-base">
        Once you've confirmed the integration is working, explore our JavaScript API documentation to learn how to use these features in your marketing strategies. Remember to set 'verboseLogging' to false in production for optimal performance.
      </p>
      <p class="mb-4 text-base">
        For developers: You can now use our JavaScript API to programmatically interact with Mobilozophy features, customize behavior, and create dynamic experiences for your users.
      </p>
      <p class="mb-4 text-base">
        For business owners: Your marketing team can now leverage these tools through our dashboard, while the JavaScript integration ensures seamless interaction with your website.
      </p>
      <p class="mb-4 text-base">
        Need help? Our support team is ready to assist you in leveraging these powerful JavaScript tools to grow your business.
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'GettingStarted',
  setup() {
    const store = useStore()
    const mzcapiConfig = computed(() => store.state.mzcapiConfig)
    return { mzcapiConfig }
  }
}
</script>
