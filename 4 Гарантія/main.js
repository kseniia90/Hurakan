// if(window.innerWidth > 900){
//     document.querySelectorAll('.call-me__btn').forEach((item)=>{
//         item.addEventListener('click', ()=>{
//             document.querySelector('[data-modal="#call-me"]').click();
//         })
//     })
// }else{
//     document.querySelectorAll('.call-me__btn').forEach((item)=>{
//         item.addEventListener('click', ()=>{
//             document.querySelector('[href="#menu"]').click();
//             document.querySelector('[href="#callback-form"]').click();
//         })
//     })
// }


// popup start
function openSuccessPopup() {
  if (document.querySelector(".hrk-popup-thanks.success") !== null) {
    document.querySelector(".hrk-popup-thanks.success").classList.add("active");
    document.body.style.overflow = "hidden";

    window.addEventListener("click", function (e) {
      if (e.target.closest(".success .hrk-popup__close")) {
          e.preventDefault();
          document.querySelector(".hrk-popup-thanks.success").classList.remove("active");
          document.body.style.overflow = "auto";
        }

        if ( document.querySelector(".hrk-popup-thanks.success.active") && !e.target.closest(".success .hrk-popup-content")) {
          document.querySelector(".hrk-popup-thanks.success").classList.remove("active");
          document.body.style.overflow = "auto";
        }
    });
  }
}

function openErrorPopup() {
  if (document.querySelector(".hrk-popup-thanks.error") !== null) {
    document.querySelector(".hrk-popup-thanks.error").classList.add("active");
    document.body.style.overflow = "hidden";

    window.addEventListener("click", function (e) {
      if (e.target.closest(".error .hrk-popup__close")) {
          e.preventDefault();
          document.querySelector(".hrk-popup-thanks.error").classList.remove("active");
          document.body.style.overflow = "auto";
        }

        if ( document.querySelector(".hrk-popup-thanks.error.active") && !e.target.closest(".error .hrk-popup-content")) {
          document.querySelector(".hrk-popup-thanks.error").classList.remove("active");
          document.body.style.overflow = "auto";
        }
    });
  }
}

if (document.querySelector(".hrk-popup-thanks.success") !== null) {

    document.querySelector(".success .hrk-popup__close-thanks").addEventListener('click', (e)=>{
        e.preventDefault();
            document.querySelector(".hrk-popup-thanks.success").classList.remove("active");
            document.body.style.overflow = "auto";
      })
};

if (document.querySelector(".hrk-popup-thanks.error") !== null) {

    document.querySelector(".error .hrk-popup__close-thanks").addEventListener('click', (e)=>{
        e.preventDefault();
            document.querySelector(".hrk-popup-thanks.error").classList.remove("active");
            document.body.style.overflow = "auto";
      })
};  
// popup end


var VALID_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

function validateFile(event) {
  const input = event.target;
  if (input.files && input.files.length) {
    const file = input.files[0];
    const type = file.type;

    const errorEl = document.getElementById('error-invalid-type');

    if (VALID_TYPES.indexOf(type) < 0) {
      errorEl.classList.add('state-visible');
      document.querySelector('.upload-subtitle').style.display = 'none';
    } else {
      errorEl.classList.remove('state-visible');
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const imageInput = document.getElementById('fileInput');
  if (imageInput) {
    imageInput.addEventListener('change', validateFile);
  }
});

