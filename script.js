// =======================
// Smooth scroll to section
// =======================
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
}

// =======================
// Highlight active nav link on scroll + Navbar shrink + Back-to-top
// =======================
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('#nav-links a')

  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 200
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active')
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active')
        }
      })
    }
  })

  // Navbar shrink effect
  const navbar = document.querySelector('nav')
  if (window.scrollY > 50) {
    navbar.classList.add('shrink')
  } else {
    navbar.classList.remove('shrink')
  }

  // Show back-to-top button
  const backToTop = document.getElementById('back-to-top')
  if (window.scrollY > 300) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }

  // Update scroll progress bar
  const scrollProgress = document.getElementById('scroll-progress')
  let scrollTop = window.scrollY
  let docHeight = document.documentElement.scrollHeight - window.innerHeight
  let scrollPercent = (scrollTop / docHeight) * 100
  scrollProgress.style.width = scrollPercent + '%'
})

// =======================
// Mobile Menu Toggle
// =======================
const menuToggle = document.getElementById('menu-toggle')
const navLinksContainer = document.getElementById('nav-links')

if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active')
  })

  // Close menu when a link is clicked (better UX on mobile)
  document.querySelectorAll('#nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active')
    })
  })
}

// =======================
// Scroll reveal animations
// =======================
const revealElements = document.querySelectorAll('section, .project-card')

const revealOnScroll = () => {
  const windowHeight = window.innerHeight
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible')
    }
  })
}

window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)

// =======================
// Back-to-top button click
// =======================
const backToTopBtn = document.getElementById('back-to-top')
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

// =======================
// Read More toggle for projects
// =======================
document.querySelectorAll('.read-more-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const projectCard = btn.closest('.project-card')
    const moreText = projectCard.querySelector('.more-text')

    if (moreText.style.display === 'inline') {
      moreText.style.display = 'none'
      btn.textContent = 'Read More'
    } else {
      moreText.style.display = 'inline'
      btn.textContent = 'Read Less'
    }
  })
})
