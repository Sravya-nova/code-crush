export function initReveal(root = document) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  const els = Array.from(root.querySelectorAll('.reveal'))
  els.forEach((el) => io.observe(el))
}

export default initReveal
