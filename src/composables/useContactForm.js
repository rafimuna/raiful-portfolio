import { ref } from 'vue'

export function useContactForm() {
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const loading = ref(false)
  const successDialog = ref(false)

  const resetForm = () => {
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  const submitForm = async () => {
    loading.value = true

    // 🔗 Replace with real API later
    await new Promise((r) => setTimeout(r, 1200))

    loading.value = false
    successDialog.value = true
    resetForm()
  }

  return {
    form,
    loading,
    successDialog,
    submitForm,
  }
}
