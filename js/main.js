// About tabs

var aboutTab = document.querySelectorAll('.about_tab')

aboutTab.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            aboutTab.forEach(elem => {
                elem.classList.remove('active')
            })
            item.classList.add('active')
        }
    })
})

// Modal

var headerBtn = document.querySelector('.header_btn')
var servicesBtn1 = document.querySelector('.services_btn_desktop')
var servicesBtn2 = document.querySelector('.services_btn_mobile')
var modalForm = document.querySelector('#modalForm')
var modalFirst = document.querySelector('#modal1')

document.addEventListener("click", (evt) => {
    let targetEl = evt.target;
    do {
      if(targetEl == modalFirst || targetEl == headerBtn || targetEl == servicesBtn1 || targetEl == servicesBtn2) {
        modalForm.classList.add('show')
        // This is a click inside, does nothing, just return.
        return;
      }
      targetEl = targetEl.parentNode;
    } while (targetEl);
        // This is a click outside. 
        modalForm.classList.remove('show')
  });


var modalVideo = document.querySelector('#modalVideo')
var modalSecond = document.querySelector('#modal2')
var videoBtn = document.querySelector('.about_video')
var video = document.querySelector('#video')

document.addEventListener("click", (evt) => {
    let targetEl = evt.target;
    do {
        if(targetEl == modalSecond || targetEl == videoBtn) {
            modalVideo.classList.add('show')
            video.play()
        // This is a click inside, does nothing, just return.
        return;
        }
        targetEl = targetEl.parentNode;
    } while (targetEl);
        // This is a click outside. 
        modalVideo.classList.remove('show')
        video.pause()
});



// Form 

// Form

function sendEmail(param) {
    var name = document.querySelector('.input_name');
    var email = document.querySelector('.input_email');
    var tel = document.querySelector('.input_tel');
    var body = document.querySelector('.input_body');

    console.log(name ,email, tel)

    if (isNotEmpty(name) && isNotEmpty(tel)) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // document.getElementById("demo").innerHTML = this.responseText;
                console.log('sdf')
            }
            };

        xhttp.open("POST", "telegram.php", true);
        xhttp.send(`name=${name.value}&email=${email.value}&tel=${tel.value}&body=${body.value}`);
        // $.ajax({
        //    url: 'telegram.php',
        //    method: 'POST',
        //    dataType: 'json',
        //    data: {
        //        name: name.value,
        //        email: email.value,
        //        tel: tel.value,
        //        body: body.value ?? "empty",
        //    }, success: function (response) {
        //         $('.sent-notification').text("Message Sent Successfully.");
        //         $('.myForm')[param].reset();
        //    }
        // });
    }
}