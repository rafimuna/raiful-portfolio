<template>
  <q-page padding class="bg-grey-1">
    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="hero-content">
        <div class="hero-badge q-mb-md">
          <q-badge rounded color="primary" class="q-px-lg q-py-xs">
            <q-icon name="chat" class="q-mr-xs" /> Get in Touch
          </q-badge>
        </div>
        <h1 class="text-h1 text-weight-bold gradient-text q-mb-sm">
          Let's Build Something Amazing
        </h1>
        <p class="text-h5 text-grey-7 max-width-600 q-mx-auto q-mb-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
        <div class="row justify-center q-gutter-md">
          <q-btn
            unelevated
            color="primary"
            icon="schedule"
            label="Response within 24h"
            size="sm"
            class="btn-info"
          />
          <q-btn
            outline
            color="primary"
            icon="language"
            label="Remote Work Available"
            size="sm"
            class="btn-info"
          />
        </div>
      </div>
    </section>

    <div class="row q-col-gutter-xl q-mb-xl">
      <!-- Enhanced Contact Form -->
      <div class="col-12 col-lg-8">
        <q-card flat bordered class="contact-card q-pa-lg">
          <div class="card-header row items-center q-mb-lg">
            <div class="col-auto">
              <div class="icon-wrapper bg-primary q-pa-sm rounded-borders">
                <q-icon name="mail" color="white" size="md" />
              </div>
            </div>
            <div class="col q-ml-md">
              <h2 class="text-h3 text-weight-bold q-ma-none">Send Me a Message</h2>
              <p class="text-grey-6 q-mt-xs q-mb-none">I typically respond within 24 hours</p>
            </div>
          </div>

          <q-form ref="formRef" @submit="handleSubmit" class="q-gutter-lg">
            <!-- Name and Email Row -->
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="text-subtitle1 text-weight-medium q-mb-xs">Full Name *</label>
                  <q-input
                    v-model="form.name"
                    outlined
                    placeholder="Your name"
                    :rules="[(v) => !!v || 'Name is required']"
                    lazy-rules
                    hide-bottom-space
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="text-subtitle1 text-weight-medium q-mb-xs">Email Address *</label>
                  <q-input
                    v-model="form.email"
                    type="email"
                    outlined
                    placeholder="you@example.com"
                    :rules="[
                      (v) => !!v || 'Email is required',
                      (v) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
                    ]"
                    lazy-rules
                    hide-bottom-space
                  >
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>

            <!-- Subject Field -->
            <div class="form-group">
              <label class="text-subtitle1 text-weight-medium q-mb-xs">Subject *</label>
              <q-select
                v-model="form.subject"
                outlined
                :options="SUBJECT_OPTIONS"
                placeholder="Select a subject"
                :rules="[(v) => !!v || 'Subject is required']"
                lazy-rules
                hide-bottom-space
                emit-value
                map-options
              >
                <template v-slot:prepend>
                  <q-icon name="subject" />
                </template>
              </q-select>
            </div>

            <!-- Message Field -->
            <div class="form-group">
              <label class="text-subtitle1 text-weight-medium q-mb-xs">Message *</label>
              <q-input
                v-model="form.message"
                type="textarea"
                outlined
                placeholder="Tell me about your project or inquiry..."
                rows="6"
                :rules="[(v) => !!v || 'Message is required']"
                lazy-rules
                hide-bottom-space
                counter
                maxlength="1000"
              />
            </div>

            <!-- Submit Button -->
            <div class="q-pt-md">
              <q-btn
                type="submit"
                color="primary"
                size="lg"
                icon="send"
                label="Send Message"
                :loading="loading"
                unelevated
                class="full-width q-py-sm btn-submit"
              >
                <template v-slot:loading>
                  <q-spinner-hourglass class="on-left" />
                  Sending...
                </template>
              </q-btn>
            </div>
          </q-form>
        </q-card>
      </div>

      <!-- Enhanced Contact Info -->
      <div class="col-12 col-lg-4">
        <!-- Contact Details Card -->
        <q-card flat bordered class="info-card q-pa-lg q-mb-md">
          <div class="card-header row items-center q-mb-lg">
            <div class="col-auto">
              <div class="icon-wrapper bg-secondary q-pa-sm rounded-borders">
                <q-icon name="contact_mail" color="white" size="md" />
              </div>
            </div>
            <div class="col q-ml-md">
              <h3 class="text-h4 text-weight-bold q-ma-none">Contact Information</h3>
              <p class="text-grey-6 q-mt-xs q-mb-none">Other ways to reach me</p>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="contact-details q-gutter-y-md">
            <!-- Email -->
            <div class="contact-item row items-start q-pa-sm">
              <div class="col-auto">
                <div class="contact-icon bg-blue-1 text-primary q-pa-sm rounded-borders">
                  <q-icon name="email" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-medium q-ma-none">Email</h4>
                <p class="text-body1 text-grey-7 q-mt-xs q-mb-none">contact@raiful.dev</p>
                <q-btn
                  flat
                  color="primary"
                  label="Send Email"
                  size="sm"
                  class="q-mt-xs q-pl-none"
                  href="mailto:contact@raiful.dev"
                />
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-item row items-start q-pa-sm">
              <div class="col-auto">
                <div class="contact-icon bg-green-1 text-positive q-pa-sm rounded-borders">
                  <q-icon name="phone" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-medium q-ma-none">Phone</h4>
                <p class="text-body1 text-grey-7 q-mt-xs q-mb-none">+880 1234 567890</p>
                <q-btn
                  flat
                  color="positive"
                  label="Call Now"
                  size="sm"
                  class="q-mt-xs q-pl-none"
                  href="tel:+8801234567890"
                />
              </div>
            </div>

            <!-- Location -->
            <div class="contact-item row items-start q-pa-sm">
              <div class="col-auto">
                <div class="contact-icon bg-orange-1 text-warning q-pa-sm rounded-borders">
                  <q-icon name="location_on" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-medium q-ma-none">Location</h4>
                <p class="text-body1 text-grey-7 q-mt-xs q-mb-none">Dhaka, Bangladesh</p>
                <q-btn
                  flat
                  color="warning"
                  label="View on Map"
                  size="sm"
                  class="q-mt-xs q-pl-none"
                  href="https://maps.google.com/?q=Dhaka+Bangladesh"
                  target="_blank"
                />
              </div>
            </div>

            <!-- Availability -->
            <div
              class="availability q-mt-lg q-pt-md"
              style="border-top: 1px solid rgba(0, 0, 0, 0.1)"
            >
              <div class="row items-center">
                <div class="col-auto">
                  <q-badge rounded color="positive" />
                </div>
                <div class="col q-ml-md">
                  <span class="text-weight-medium">Currently Available</span>
                  <p class="text-caption text-grey-6 q-mb-none">
                    Open for new projects & collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <!-- Social Links Card -->
        <q-card flat bordered class="social-card q-pa-lg">
          <div class="card-header row items-center q-mb-md">
            <div class="col-auto">
              <div class="icon-wrapper bg-accent q-pa-sm rounded-borders">
                <q-icon name="share" color="white" size="md" />
              </div>
            </div>
            <div class="col q-ml-md">
              <h3 class="text-h4 text-weight-bold q-ma-none">Connect Socially</h3>
              <p class="text-grey-6 q-mt-xs q-mb-none">Follow me on social media</p>
            </div>
          </div>

          <div class="row q-gutter-sm justify-center">
            <q-btn
              v-for="social in SOCIAL_LINKS"
              :key="social.name"
              :color="social.color"
              :icon="social.icon"
              :href="social.url"
              target="_blank"
              round
              size="md"
              class="social-btn"
            >
              <q-tooltip>{{ social.tooltip }}</q-tooltip>
            </q-btn>
          </div>

          <!-- Contact Hours -->
          <div
            class="contact-hours q-mt-lg q-pt-md text-center"
            style="border-top: 1px solid rgba(0, 0, 0, 0.1)"
          >
            <div class="text-caption text-grey-6 q-mb-xs">Typical Response Time</div>
            <div class="text-h6 text-weight-medium">Within 24 Hours</div>
            <div class="text-caption text-grey-6">Monday - Friday, 9 AM - 6 PM GMT+6</div>
          </div>
        </q-card>
      </div>
    </div>

    <!-- Enhanced FAQ Section -->
    <q-card flat bordered class="faq-card q-pa-lg q-mb-xl">
      <div class="text-center q-mb-lg">
        <h2 class="text-h3 text-weight-bold gradient-text q-mb-sm">Frequently Asked Questions</h2>
        <p class="text-h6 text-grey-7 max-width-600 q-mx-auto">
          Quick answers to common questions about working together
        </p>
      </div>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6" v-for="(faq, index) in FAQS" :key="index">
          <q-card flat bordered class="faq-item q-pa-md">
            <div class="row items-center q-mb-sm">
              <div class="col-auto">
                <q-icon name="help" color="primary" class="q-mr-sm" />
              </div>
              <div class="col">
                <h4 class="text-h6 text-weight-bold q-ma-none">{{ faq.question }}</h4>
              </div>
            </div>
            <p class="text-body1 text-grey-7 q-mb-none">{{ faq.answer }}</p>
          </q-card>
        </div>
      </div>
    </q-card>

    <!-- Success Dialog -->
    <q-dialog v-model="successDialog" persistent>
      <q-card class="success-card">
        <q-card-section class="bg-positive text-white">
          <div class="text-h5 text-weight-bold">Message Sent Successfully!</div>
        </q-card-section>

        <q-card-section class="q-pt-xl text-center">
          <q-icon name="check_circle" color="positive" size="xl" class="q-mb-md" />
          <p class="text-h6 q-mb-none">Thank you for reaching out!</p>
          <p class="text-grey-7 q-mt-sm">
            I've received your message and will get back to you within 24 hours.
          </p>
        </q-card-section>

        <q-card-actions align="center" class="q-pb-xl">
          <q-btn
            unelevated
            color="positive"
            label="Close"
            @click="successDialog = false"
            class="q-px-xl"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SUBJECT_OPTIONS, SOCIAL_LINKS, FAQS } from 'src/data/contact.data'
import { useContactForm } from 'src/composables/useContactForm'

gsap.registerPlugin(ScrollTrigger)

const formRef = ref(null)
const { form, loading, successDialog, submitForm } = useContactForm()

const handleSubmit = async () => {
  const valid = await formRef.value.validate()
  if (!valid) return
  await submitForm()
}

onMounted(() => {
  // Hero animation
  gsap.from('.hero-content', {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  // Form and info cards animation
  gsap.from('.contact-card', {
    x: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-card',
      start: 'top 80%',
    },
  })

  gsap.from('.info-card', {
    x: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.info-card',
      start: 'top 80%',
    },
  })

  gsap.from('.social-card', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.social-card',
      start: 'top 80%',
    },
  })

  // FAQ items animation
  gsap.from('.faq-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.faq-card',
      start: 'top 70%',
    },
  })
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  padding: 4rem 0 3rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.gradient-text {
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.max-width-600 {
  max-width: 600px;
}

.btn-info {
  border-radius: 25px;
  font-weight: 500;
}

/* Card Styling */
.contact-card,
.info-card,
.social-card,
.faq-card {
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-card:hover,
.info-card:hover,
.social-card:hover,
.faq-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.card-header {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* Icon Wrappers */
.icon-wrapper {
  border-radius: 12px;
}

.contact-icon {
  border-radius: 10px;
}

/* Form Styling */
.form-group label {
  display: block;
}

/* Contact Details */
.contact-details {
  padding: 0.5rem 0;
}

.contact-item {
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(var(--q-primary-rgb), 0.05);
  transform: translateX(5px);
}

/* Social Buttons */
.social-btn {
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-btn:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* FAQ Items */
.faq-item {
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
}

.faq-item:hover {
  border-color: var(--q-primary);
  transform: translateY(-3px);
}

/* Submit Button */
.btn-submit {
  transition: all 0.3s ease;
  border-radius: 10px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(var(--q-primary-rgb), 0.3);
}

/* Success Dialog */
.success-card {
  border-radius: 20px;
  width: 400px;
  max-width: 90vw;
}

/* Responsive Design */
@media (max-width: 1440px) {
  .hero-section {
    padding: 3rem 0 2rem;
  }

  .text-h1 {
    font-size: 3rem;
  }
}

@media (max-width: 1024px) {
  .hero-section {
    padding: 2.5rem 0 2rem;
  }

  .text-h1 {
    font-size: 2.5rem;
  }

  .text-h3 {
    font-size: 2rem;
  }

  .row.q-col-gutter-xl {
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0 1.5rem;
  }

  .text-h1 {
    font-size: 2rem;
  }

  .text-h3,
  .text-h4 {
    font-size: 1.5rem;
  }

  .text-h5 {
    font-size: 1.25rem;
  }

  .text-h6 {
    font-size: 1rem;
  }

  .contact-card,
  .info-card,
  .social-card,
  .faq-card {
    padding: 1.25rem !important;
    border-radius: 15px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-header .col.q-ml-md {
    margin-left: 0;
    margin-top: 0.75rem;
  }

  .row.q-col-gutter-md > .col-12.col-md-6 {
    margin-bottom: 1rem;
  }

  .row.q-col-gutter-xl {
    margin-bottom: 1.5rem;
  }

  .faq-card .row.q-col-gutter-lg {
    margin-top: 1rem;
  }

  .faq-card .col-12.col-md-6 {
    margin-bottom: 1rem;
  }

  .social-card .row.q-gutter-sm {
    justify-content: center;
  }

  .social-btn {
    margin: 0.25rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 1.5rem 0 1rem;
  }

  .text-h1 {
    font-size: 1.75rem;
  }

  .text-h3,
  .text-h4 {
    font-size: 1.25rem;
  }

  .text-h5 {
    font-size: 1.1rem;
  }

  .contact-card,
  .info-card,
  .social-card,
  .faq-card {
    padding: 1rem !important;
    border-radius: 12px;
  }

  .btn-info {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }

  .contact-item {
    padding: 0.5rem !important;
  }

  .form-group label {
    font-size: 0.875rem;
  }

  .row.q-gutter-md.justify-center {
    flex-wrap: wrap;
  }

  .success-card {
    width: 100%;
    margin: 1rem;
  }
}

@media (max-width: 360px) {
  .text-h1 {
    font-size: 1.5rem;
  }

  .hero-badge .q-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
  }

  .contact-details .text-h6 {
    font-size: 1rem;
  }

  .contact-details .text-body1 {
    font-size: 0.875rem;
  }

  .social-btn {
    width: 40px;
    height: 40px;
    min-height: 40px;
  }
}

/* Print Styles */
@media print {
  .contact-card,
  .info-card,
  .social-card,
  .faq-card {
    box-shadow: none;
    border: 1px solid #ddd;
  }

  .hero-section {
    padding: 2rem 0;
  }

  .btn-submit,
  .social-btn,
  .q-btn {
    display: none !important;
  }
}
</style>
