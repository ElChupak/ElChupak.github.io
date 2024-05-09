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
  "panorama": "../img/works/panoffice.jpg",
  "autoLoad": true,
  "autoRotate": 1,
  "autoRotateInactivityDelay": 2000,
  "showZoomCtrl": false
});

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