import { boot } from 'quasar/wrappers'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default boot(() => {
  gsap.registerPlugin(ScrollTrigger)
})
