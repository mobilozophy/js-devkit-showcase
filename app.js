const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: 'Hello Vue 3 + Tailwind CSS!'
        }
    },
    template: `
        <div class="container mx-auto p-4">
            <h1 class="text-3xl font-bold text-blue-600 mb-4">{{ message }}</h1>
            <p class="text-gray-700">This is a basic Vue 3 project with Tailwind CSS.</p>
        </div>
    `
})

app.mount('#app')