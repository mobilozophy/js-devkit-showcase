<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-primary">Forms Integration</h1>
    <p class="mb-8 text-base">
      Welcome to Mobilozophy's Forms Integration guide. This powerful feature goes beyond simple data collection. Our forms are designed to create meaningful interactions, providing valuable insights that seamlessly integrate with our customer data platform (CDP). By using our forms, you're not just gathering information; you're building a comprehensive understanding of your audience, enabling more personalized and effective engagement strategies.
    </p>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Why Choose Mobilozophy Forms?</h2>
      <ul class="list-disc list-inside mb-4 text-base">
        <li>Seamless integration with our CDP for a holistic view of customer interactions</li>
        <li>Enhanced user experience through personalized, context-aware forms</li>
        <li>Deeper insights into user behavior and preferences</li>
        <li>Improved decision-making based on comprehensive data analysis</li>
        <li>Streamlined lead capture and survey processes</li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">What You'll Need</h2>
      <ul class="list-disc list-inside mb-4 text-base">
        <li>Basic HTML and CSS knowledge</li>
        <li>Familiarity with JavaScript (for advanced customization)</li>
        <li>Access to your website's codebase</li>
        <li>Your Mobilozophy account and form UUIDs</li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Basic Form Integration</h2>
      <p class="mb-4 text-base">To integrate a form into your website and start gathering valuable insights, simply add the following HTML code to your desired page:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">&lt;div</span> <span class="text-blue-300">class</span>=<span class="text-orange-300">"mzcapi-form"</span> 
     <span class="text-blue-300">data-mz-account</span>=<span class="text-orange-300">"your_account_uuid"</span> 
     <span class="text-blue-300">data-mz-form</span>=<span class="text-orange-300">"your_form_uuid"</span>
     <span class="text-blue-300">data-mz-form-style</span>=<span class="text-orange-300">"default"</span><span class="text-pink-400">&gt;&lt;/div&gt;</span></code></pre>
      </div>
      <p class="mt-4 text-base">Replace <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">your_account_uuid</code> and <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">your_form_uuid</code> with your actual account and form UUIDs. You can find these in your Mobilozophy dashboard.</p>
      <p class="mt-4 text-base">The <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">data-mz-form-style</code> attribute is set to "default" for now. In future releases, we may provide additional styling options or templates for forms. If you remove this attribute, you can apply custom styles to the form.</p>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Form Widget Demo (Default Style)</h2>
      <p class="mb-4 text-base">Here's a live example of an embedded form using the default style:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">&lt;div</span> <span class="text-blue-300">class</span>=<span class="text-orange-300">"mzcapi-form"</span> 
     <span class="text-blue-300">data-mz-account</span>=<span class="text-orange-300">"{{ formConfig.account_uuid }}"</span> 
     <span class="text-blue-300">data-mz-form</span>=<span class="text-orange-300">"{{ formConfig.form_uuid }}"</span>
     <span class="text-blue-300">data-mz-form-style</span>=<span class="text-orange-300">"{{ formConfig.form_style }}"</span><span class="text-pink-400">&gt;&lt;/div&gt;</span></code></pre>
      </div>
      <p class="mb-4 text-base">And here's how it renders:</p>
      <div class="mzcapi-form" 
           :data-mz-account="formConfig.account_uuid" 
           :data-mz-form="formConfig.form_uuid"
           :data-mz-form-style="formConfig.form_style"></div>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Customizing Form Styles</h2>
      <p class="mb-4 text-base">For developers who want more control over the form's appearance, you have two options:</p>
      <ul class="list-disc list-inside mb-4 text-base">
        <li>Use the default style by adding <code class="bg-gray-200 px-1 py-0.5 rounded text-red-600 font-mono">data-mz-form-style="default"</code> to your form div.</li>
        <li>Create a custom style by targeting the form's classes or ID in your CSS.</li>
      </ul>
      <p class="mb-4 text-base">Here's an example of custom CSS you can use as a starting point:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">.mzcapi-form</span> {
  <span class="text-blue-300">font-family</span>: <span class="text-orange-300">'Arial', sans-serif</span>;
  <span class="text-blue-300">max-width</span>: <span class="text-purple-300">500px</span>;
  <span class="text-blue-300">margin</span>: <span class="text-purple-300">0 auto</span>;
  <span class="text-blue-300">padding</span>: <span class="text-purple-300">20px</span>;
  <span class="text-blue-300">background-color</span>: <span class="text-orange-300">#f8f9fa</span>;
  <span class="text-blue-300">border-radius</span>: <span class="text-purple-300">8px</span>;
  <span class="text-blue-300">box-shadow</span>: <span class="text-purple-300">0 2px 10px</span> <span class="text-orange-300">rgba(0, 0, 0, 0.1)</span>;
}

<span class="text-pink-400">.mzcapi-form-cover-wrapper</span> {
  <span class="text-blue-300">margin-bottom</span>: <span class="text-purple-300">20px</span>;
}

<span class="text-pink-400">.mzcapi-form-cover</span> {
  <span class="text-blue-300">width</span>: <span class="text-purple-300">100%</span>;
  <span class="text-blue-300">height</span>: <span class="text-purple-300">auto</span>;
  <span class="text-blue-300">border-radius</span>: <span class="text-purple-300">8px</span>;
}

<span class="text-pink-400">.mzcapi-form-title</span> {
  <span class="text-blue-300">font-size</span>: <span class="text-purple-300">24px</span>;
  <span class="text-blue-300">color</span>: <span class="text-orange-300">#333</span>;
  <span class="text-blue-300">margin-bottom</span>: <span class="text-purple-300">20px</span>;
  <span class="text-blue-300">text-align</span>: <span class="text-orange-300">center</span>;
}

<span class="text-pink-400">.mzcapi-form-field-wrapper</span> {
  <span class="text-blue-300">margin-bottom</span>: <span class="text-purple-300">15px</span>;
}

<span class="text-pink-400">.mzcapi-form-label</span> {
  <span class="text-blue-300">display</span>: <span class="text-orange-300">block</span>;
  <span class="text-blue-300">margin-bottom</span>: <span class="text-purple-300">5px</span>;
  <span class="text-blue-300">font-weight</span>: <span class="text-orange-300">bold</span>;
}

<span class="text-pink-400">.mzcapi-form-input</span> {
  <span class="text-blue-300">width</span>: <span class="text-purple-300">100%</span>;
  <span class="text-blue-300">padding</span>: <span class="text-purple-300">10px</span>;
  <span class="text-blue-300">border</span>: <span class="text-purple-300">1px</span> <span class="text-orange-300">solid #ccc</span>;
  <span class="text-blue-300">border-radius</span>: <span class="text-purple-300">4px</span>;
  <span class="text-blue-300">font-size</span>: <span class="text-purple-300">16px</span>;
}

<span class="text-pink-400">.mzcapi-form-submit</span> {
  <span class="text-blue-300">background-color</span>: <span class="text-orange-300">#F7941D</span>;
  <span class="text-blue-300">color</span>: <span class="text-orange-300">white</span>;
  <span class="text-blue-300">padding</span>: <span class="text-purple-300">10px 20px</span>;
  <span class="text-blue-300">border</span>: <span class="text-orange-300">none</span>;
  <span class="text-blue-300">border-radius</span>: <span class="text-purple-300">4px</span>;
  <span class="text-blue-300">cursor</span>: <span class="text-orange-300">pointer</span>;
  <span class="text-blue-300">font-size</span>: <span class="text-purple-300">18px</span>;
  <span class="text-blue-300">width</span>: <span class="text-purple-300">100%</span>;
}</code></pre>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Form Widget Demo (Custom Styling)</h2>
      <p class="mb-4 text-base">Here's how to embed a form with custom styling:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">&lt;div</span> <span class="text-blue-300">class</span>=<span class="text-orange-300">"mzcapi-form custom-styled-form"</span> 
     <span class="text-blue-300">data-mz-account</span>=<span class="text-orange-300">"{{ formConfig.account_uuid }}"</span> 
     <span class="text-blue-300">data-mz-form</span>=<span class="text-orange-300">"{{ formConfig.form_uuid }}"</span><span class="text-pink-400">&gt;&lt;/div&gt;</span></code></pre>
      </div>
      <p class="mb-4 text-base">And here's how it looks with our custom styling:</p>
      <div class="mzcapi-form custom-styled-form" 
           :data-mz-account="formConfig.account_uuid" 
           :data-mz-form="formConfig.form_uuid"></div>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Advanced: Form Submission Handling</h2>
      <p class="mb-4 text-base">For developers who need more control, you can add custom behavior using JavaScript. Here's how to listen for form submissions:</p>
      <div class="bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-300"><code><span class="text-pink-400">document</span>.<span class="text-blue-300">addEventListener</span>(<span class="text-orange-300">'mzcapi:form:submitted'</span>, <span class="text-yellow-300">function</span>(event) {
  <span class="text-purple-300">console</span>.<span class="text-blue-300">log</span>(<span class="text-orange-300">'Form submitted:'</span>, event.<span class="text-blue-300">detail</span>);
  <span class="text-green-300">// Add your custom logic here</span>
});</code></pre>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Best Practices for Developers</h2>
      <ul class="list-disc list-inside text-base">
        <li class="mb-2">Keep forms short and focused to improve completion rates and data quality.</li>
        <li class="mb-2">Use clear and concise labels for form fields to enhance user understanding.</li>
        <li class="mb-2">Implement client-side form validation for immediate user feedback and data accuracy.</li>
        <li class="mb-2">Consider using multi-step forms for longer surveys to reduce user fatigue and improve data collection.</li>
        <li>Always provide clear feedback after form submission to acknowledge user interaction and encourage future engagement.</li>
      </ul>
    </div>



    <div class="mt-8">
      <h2 class="mb-4 text-2xl font-semibold text-secondary">Conclusion</h2>
      <p class="mb-4 text-base">
        By following the instructions in this guide, you'll be able to integrate Mobilozophy forms into your website and leverage the power of our customer data platform (CDP). Whether you're using a basic form integration or customizing form styles, you'll have the flexibility to create engaging and data-driven experiences for your users.
      </p>
      <p class="mb-4 text-base">
        Remember to keep your forms short and focused, use clear and concise labels, implement client-side form validation, and always provide clear feedback after form submission. These best practices will enhance user experience and improve data quality.
      </p>
      <p class="mb-4 text-base">
        If you're working with Single Page Applications (SPAs), follow the specific instructions for Vue.js and React to ensure proper functionality across route changes.
      </p>
      <p class="mb-4 text-base">
        We're excited to see the impact Mobilozophy forms will have on your website and your users. If you have any questions or need further assistance, don't hesitate to reach out to our support team.
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Forms',
  setup() {
    const store = useStore()

    const formConfig = computed(() => store.state.formConfig)
    const mzcapiConfig = computed(() => store.state.mzcapiConfig)

    return {
      formConfig,
      mzcapiConfig
    }
  }
}
</script>

<style>
.custom-styled-form {
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.custom-styled-form .mzcapi-form-cover-wrapper {
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 8px;
}

.custom-styled-form .mzcapi-form-cover {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.custom-styled-form .mzcapi-form-cover:hover {
  transform: scale(1.05);
}

.custom-styled-form .mzcapi-form-title {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
}

.custom-styled-form .mzcapi-form-field-wrapper {
  margin-bottom: 20px;
}

.custom-styled-form .mzcapi-form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #34495e;
}

.custom-styled-form .mzcapi-form-input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-styled-form .mzcapi-form-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  outline: none;
}

.custom-styled-form .mzcapi-form-submit {
  background-color: #F7941D;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-styled-form .mzcapi-form-submit:hover {
  background-color: #78278B;
  transform: translateY(-2px);
}

.custom-styled-form .mzcapi-form-style-custom {
  width: 100%;
}

.custom-styled-form .mzcapi-form-header {
  margin-bottom: 30px;
}

.custom-styled-form .mzcapi-form-fields {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.custom-styled-form .mzcapi-form-input-wrapper {
  width: 100%;
}

.custom-styled-form .mzcapi-form-submit-wrapper {
  margin-top: 30px;
}

@media (max-width: 768px) {
  .custom-styled-form {
    padding: 20px;
  }

  .custom-styled-form .mzcapi-form-title {
    font-size: 24px;
  }

  .custom-styled-form .mzcapi-form-input,
  .custom-styled-form .mzcapi-form-submit {
    font-size: 16px;
  }

  .custom-styled-form .mzcapi-form-fields {
    grid-template-columns: 1fr;
  }
}
</style>