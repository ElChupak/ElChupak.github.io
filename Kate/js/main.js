'use strict'

/* const copyBtn = document.getElementById('copyurl');

copyBtn.addEventListener('click', () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('URL copied to clipboard!');
  }).catch(() => {
    alert('Error copying URL to clipboard');
  });
}); */

//Copy Email

function copyURI(evt) {
  evt.preventDefault();
  navigator.clipboard.writeText(evt.target.getAttribute('data-mail')).then(() => {
    alert('Email copied to clipboard!');
  }, () => {
    alert('Error copying Email to clipboard');
  });
}

//Panorama 

pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "img/works/panoffice.webp",
  "autoLoad": true,
  "autoRotate": 1,
  "autoRotateInactivityDelay": 3000,
  "showZoomCtrl": true,
  "mouseZoom": false,
  "compass": false
});

//Pop-up

document.querySelectorAll('.gallary img').forEach(img =>{
  img.onclick = () => {
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = img.getAttribute('data-src');
  }
});

document.querySelector('.pop-up span').onclick = () => {
  document.querySelector('.pop-up').style.display = 'none';
}

//Pop-up closer

/* const popup = document.querySelector('.pop-up img');

document.addEventListener('click', function(event){
  if(event.target.closest('.pop-up')) return
  popup.style.display = 'none';
}); */

//Mailer 

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      formPreview.innerHtml = "";
      form.reset();
    } else {
      alert("Error sanding email!")
    }
  }
});