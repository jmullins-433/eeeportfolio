//template_i8kr5ez
//service_qfg1y3u
//HDxRmcHKV9XqrEINl

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';
    emailjs
      .sendForm(
           'service_qfg1y3u',
          'template_i8kr5ez',
           event.target,
           'HDxRmcHKV9XqrEINl'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly on wund3rbar9@gmail.com"
            );
        })
}