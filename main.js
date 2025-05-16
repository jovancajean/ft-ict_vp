Swal.fire({
  title: "Jovanca Jean Angelynn",
  html: `<p>Omnia bona ex amore,</p>
         <p>All good things come from love.</p>
         <p>Jangan patah hati mulu ya Sirr Nuel</p>`,
  imageUrl: "muka.png.png",
  imageWidth: 360,
  imageHeight: 330,
  confirmButtonText: "Tutup"
});

const showHiddenPassword = (inputId, iconId) => {
  const input = document.getElementById(inputId),
        iconEye = document.getElementById(iconId)

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text'
      iconEye.classList.add('ri-eye-line')
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      input.type = 'password'
      iconEye.classList.remove('ri-eye-line')
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')
