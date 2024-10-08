<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="sticky top-0 z-50 bg-white border-b border-gray-200" v-slot="{ open }">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img class="block w-auto h-8 lg:hidden" src="@/assets/images/mobilozophy-logo.svg" alt="Mobilozophy" />
              <img class="hidden w-auto h-8 lg:block" src="@/assets/images/mobilozophy-logo.svg" alt="Mobilozophy" />
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[isCurrentRoute(item.href) ? 'border-primary text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium']" :aria-current="isCurrentRoute(item.href) ? 'page' : undefined">{{ item.name }}</router-link>
              
              <!-- Features Dropdown -->
              <div class="inline-flex relative items-center px-1 pt-1 text-sm font-medium border-b-2" :class="[isFeatureRoute() ? 'border-primary text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']" @mouseenter="showFeaturesDropdown = true" @mouseleave="showFeaturesDropdown = false">
                <button class="inline-flex items-center">
                  Features
                  <ChevronDownIcon class="ml-1 w-5 h-5" aria-hidden="true" />
                </button>
                <div v-if="showFeaturesDropdown" class="absolute left-0 top-full mt-0 w-48 bg-white rounded-md border border-gray-200 shadow-lg">
                  <router-link v-for="item in features" :key="item.name" :to="item.href" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span :class="{ 'font-bold': isCurrentRoute(item.href) }">
                      {{ isCurrentRoute(item.href) ? '• ' : '' }}{{ item.name }}
                    </span>
                  </router-link>
                </div>
              </div>
              
              <!-- Use Cases Dropdown -->
              <div class="inline-flex relative items-center px-1 pt-1 text-sm font-medium border-b-2" :class="[isUseCaseRoute() ? 'border-primary text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']" @mouseenter="showUseCasesDropdown = true" @mouseleave="showUseCasesDropdown = false">
                <button class="inline-flex items-center">
                  Use Cases
                  <ChevronDownIcon class="ml-1 w-5 h-5" aria-hidden="true" />
                </button>
                <div v-if="showUseCasesDropdown" class="absolute left-0 top-full mt-0 w-48 bg-white rounded-md border border-gray-200 shadow-lg">
                  <router-link v-for="item in useCases" :key="item.name" :to="item.href" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span :class="{ 'font-bold': isCurrentRoute(item.href) }">
                      {{ isCurrentRoute(item.href) ? '• ' : '' }}{{ item.name }}
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="openModal" class="text-sm font-medium text-gray-500 hover:text-gray-700">Settings</button>
            <!-- GitHub Logo Link -->
            <a href="https://github.com/mobilozophy/js-devkit-showcase" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">GitHub repository</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <div class="flex items-center -mr-2 sm:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex relative justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
                <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="router-link" :to="item.href" :class="[isCurrentRoute(item.href) ? 'border-primary bg-primary-light text-primary' : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800', 'block border-l-4 py-2 pl-3 pr-4 text-base font-medium']" :aria-current="isCurrentRoute(item.href) ? 'page' : undefined">{{ item.name }}</DisclosureButton>
          <DisclosureButton as="div" class="block py-2 pr-4 pl-3 text-base font-medium text-gray-600 border-l-4 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
            <span class="flex justify-between items-center">
              Use Cases
              <ChevronDownIcon class="ml-1 w-5 h-5" aria-hidden="true" />
            </span>
            <div class="mt-2 space-y-1">
              <DisclosureButton v-for="item in useCases" :key="item.name" as="router-link" :to="item.href" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ item.name }}</DisclosureButton>
            </div>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="py-1">
      <main>
        <div class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <slot name="before-content"></slot>
          <router-view></router-view>
          <slot name="after-content"></slot>
        </div>
      </main>
    </div>

    <footer class="fixed bottom-0 mt-16 w-full text-white bg-secondary">
      <div class="container px-4 py-4 mx-auto">
        <p class="text-sm text-center">&copy; {{ new Date().getFullYear() }} Mobilozophy, LLC. All rights reserved.</p>
      </div>
    </footer>

    <!-- Modal -->
    <transition name="modal">
      <div v-if="isModalOpen" class="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
        <div class="p-6 w-full max-w-md bg-white rounded-lg shadow-lg">
          <h2 class="mb-4 text-xl font-bold">Settings</h2>
          <form @submit.prevent="saveSettings">
            <div class="mb-4">
              <label for="domain" class="block text-sm font-medium text-gray-700">Domain</label>
              <input v-model="mzcapiConfig.domain" type="text" id="domain" class="block px-3 py-2 mt-1 w-full rounded-md border-gray-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div class="mb-4">
              <label for="api_url" class="block text-sm font-medium text-gray-700">API URL</label>
              <input v-model="mzcapiConfig.api_url" type="text" id="api_url" class="block px-3 py-2 mt-1 w-full rounded-md border-gray-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div class="mb-4">
              <label for="verboseLogging" class="block text-sm font-medium text-gray-700">Verbose Logging</label>
              <input v-model="mzcapiConfig.verboseLogging" type="checkbox" id="verboseLogging" class="block mt-1" />
            </div>
            <div class="mb-4">
              <label for="account_uuid" class="block text-sm font-medium text-gray-700">Account UUID</label>
              <input v-model="formConfig.account_uuid" type="text" id="account_uuid" class="block px-3 py-2 mt-1 w-full rounded-md border-gray-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div class="mb-4">
              <label for="form_uuid" class="block text-sm font-medium text-gray-700">Form UUID</label>
              <input v-model="formConfig.form_uuid" type="text" id="form_uuid" class="block px-3 py-2 mt-1 w-full rounded-md border-gray-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div class="mb-4">
              <label for="form_style" class="block text-sm font-medium text-gray-700">Form Style</label>
              <input v-model="formConfig.form_style" type="text" id="form_style" class="block px-3 py-2 mt-1 w-full rounded-md border-gray-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
            </div>
            <div class="flex justify-end">
              <button type="button" @click="closeModal" class="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Cancel</button>
              <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Save</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
// Set up the event listener immediately
console.log('%c[Parent Page] Setting up event listener for embedded app messages', 'color: #4CAF50; font-weight: bold;');

window.addEventListener('message', function(event) {
  console.log('%c[Parent Page] Received message event:', 'color: #2196F3; font-weight: bold;', event);

  // We need to check if the event is from the same origin for security
  if (event.origin !== window.location.origin) {
    console.log('%c[Parent Page] Ignoring message from different origin:', 'color: #FFC107; font-weight: bold;', event.origin);
    return;
  }

  if (event.data && event.data.type === 'mz-embedded-app-event') {
    console.log('%c[Parent App] Received event from mzCONNECT:', 'color: #9C27B0; font-weight: bold;', event.data);
    switch(event.data.eventName) {
      case 'mz-sample-event':
        console.log('%c[Parent App] Sample event received:', 'color: #E91E63; font-weight: bold;', event.data.eventData);
        // Handle the sample event
        break;
      case 'mz-app-mounted':
        console.log('%c[Parent App] mzCONNECT app mounted:', 'color: #009688; font-weight: bold;', event.data.eventData);
        // Handle app mounted event
        break;
      case 'mz-form-submitted':
        console.log('%c[Parent App] Form submitted:', 'color: #FF5722; font-weight: bold;', event.data.eventData);
        // Handle form submission
        break;
      case 'mz-form-error':
        console.log('%c[Parent App] Form error:', 'color: #F44336; font-weight: bold;', event.data.eventData);
        // Handle form error
        break;
      default:
        console.log('%c[Parent App] Unhandled event type:', 'color: #795548; font-weight: bold;', event.data.eventName);
    }
  } else {
    console.log('%c[Parent Page] Received non-mzCONNECT message event, ignoring:', 'color: #607D8B; font-weight: bold;', event.data);
  }
});

console.log('%c[Parent Page] Event listener setup complete', 'color: #4CAF50; font-weight: bold;');
</script>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const store = useStore()
const route = useRoute()

const mobileMenuOpen = ref(false)
const showUseCasesDropdown = ref(false)
const showFeaturesDropdown = ref(false)
const isModalOpen = ref(false)

const mzcapiConfig = computed(() => store.state.mzcapiConfig)
const formConfig = computed(() => store.state.formConfig)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'About', href: '/about' },
]

const features = [
  { name: 'Forms', href: '/features/forms' },
  { name: 'SMS Opt-In', href: '/features/sms-opt-in' },
  { name: 'Coupons', href: '/features/coupons' },
  { name: 'Loyalty', href: '/features/loyalty' },
  { name: 'Analytics', href: '/features/analytics' },
  { name: 'Events', href: '/features/events' },
]

const useCases = [
  { name: 'Hospitality Demo', href: '/use-cases/hospitality' },
]

const isCurrentRoute = (href) => {
  return route.path === href
}

const isFeatureRoute = () => {
  return route.path.startsWith('/features')
}

const isUseCaseRoute = () => {
  return route.path.startsWith('/use-cases')
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveSettings = () => {
  store.dispatch('updateMzcapiConfig', mzcapiConfig.value)
  store.dispatch('updateFormConfig', formConfig.value)
  closeModal()
}

const initializeMobilozophy = () => {
  window.mzcapiConfig = {
    domain: mzcapiConfig.value.domain,
    api_url: mzcapiConfig.value.api_url,
    verboseLogging: mzcapiConfig.value.verboseLogging
  }
  console.log('%c[Parent Page] mzcapiConfig set:', 'color: #4CAF50; font-weight: bold;', window.mzcapiConfig);

  const script = document.createElement('script')
  script.src = 'https://mzcapi.test/dev-js-embed/dist/embed.js'
  script.onload = () => console.log('%c[Parent Page] mzCONNECT script loaded successfully', 'color: #4CAF50; font-weight: bold;');
  script.onerror = (error) => console.error('%c[Parent Page] Error loading mzCONNECT script:', 'color: #F44336; font-weight: bold;', error);
  document.head.appendChild(script)
}

onMounted(() => {
  store.dispatch('initializeStore').then(() => {
    initializeMobilozophy()
  })
})

// Watch for changes in mzcapiConfig and reinitialize if necessary
watch(mzcapiConfig, (newConfig, oldConfig) => {
  if (JSON.stringify(newConfig) !== JSON.stringify(oldConfig)) {
    initializeMobilozophy()
  }
}, { deep: true })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap');
</style>