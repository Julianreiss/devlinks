function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')
  img.setAttribute('src', './assets/avatar-light.jpg')
  if (html.classList.contains('light')) {
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}
