
window.onload = function () {

   // let mR = 0
   // let mT = 0;
   document.querySelector('.some_page').onclick = function () {
     
   //    function move() {
   //       let glob = document.querySelector('.globe');
   //       glob.style.marginRight = mR + '.1px';
   //       mR++;
   //       glob.style.marginTop = mT + '.1px'
   //       mT++;

   //       if (mR >= 800) {

   //          mT = 0;
   //          mR = 0;

   //       }
   //       let timer = setTimeout(() => move(), 100)
   //    }
   //    move()
      location.reload()
   }

   document.querySelector('.scroll').onclick = function backTop() {

      document.querySelector('.fast').style.display = "block";
      let scr = Math.floor(window.pageYOffset);

      if (scr > 0) {
         window.scrollTo(0, scr - 30)
      }
      let timer = setTimeout(backTop, 30)

      if (scr == 0) {
         document.querySelector('.fast').style.display = "none";
         clearTimeout(timer);
      }
      else if (window.pageYOffset > 600) {
         document.querySelector('.scroll').style.display = 'block'
      }

   }

   document.body.onmouseover = function () {
      if (window.pageYOffset > 600) {

         document.querySelector('.scroll').style.display = 'block'
      } else {
         document.querySelector('.scroll').style.display = 'none'
      }

   }

   let navLink = document.querySelector('.navbar-nav');
   
   navLink.onclick = function (event) {

      let sss = document.querySelectorAll('.nav-link');

      for (let i = 0; i < sss.length; i++) {
         if (event.target.className = ('yellow')) {

            sss[i].classList.remove('yellow');
            sss[i].classList.remove('animate__flash')

         }

      }

      if (event.target.className = ('nav-link')) {

         event.target.classList.toggle('yellow')
         event.target.classList.toggle('animate__flash')
         event.target.classList.toggle('animate__animated')

      }

   }

   // function gara(event) {
   //    let Y = window.scrollY;
   //    let d = document.querySelector('.parlax__fog')

   //    let dd = document.querySelectorAll('.paralax__montain').forEach(layer => {
   //       layer.style.transform = `scale(${Y / 1150 * 1 + 1})`

   //    })
   //    d.style.transform = `scale(${Y / 150 * 1 + 1})`
   //    if (Y > 500) {
   //       d.style.opacity = '.5'
   //    } else {
   //       d.style.opacity = '1'
   //    }

   // }
  

   document.getElementById('customSwitch1').onclick = function () {
      document.addEventListener('scroll', gara)

      function gara(event) {
         let Y = window.scrollY;
         let d = document.querySelector('.parlax__fog')

         let dd = document.querySelectorAll('.paralax__montain').forEach(layer => {
            layer.style.transform = `scale(${Y / 1150 * 1 + 1})`

         })
         d.style.transform = `scale(${Y / 150 * 1 + 1})`
         if (Y > 500) {
            d.style.opacity = '.5'
         } else {
            d.style.opacity = '1'
         }

      }

      document.getElementById('customSwitch1').onclick = function () {
         document.removeEventListener('scroll', gara)
         location.reload()
         console.log(gara);

      }

   }

   document.getElementById('paralax').onclick = function () {
      let st = document.querySelector('.custom-control')
      st.style.display = 'block';

   }


   document.getElementById('About').onclick = function () {

      document.getElementById('Goog').onclick = function () {

         document.querySelector('.map').classList.toggle('maphide')
      }

      document.getElementById('fas').onclick = function () {
         let params1 = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
     width=500,height=800,left=-1000,top=-100`;
         window.open("https://www.facebook.com/gevorg.gasparyan.7528/", "test1", params1);

      }

      document.getElementById('mail').onclick = function () {
         let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
     width=500,height=800,left=-800,top=-100`;
         window.open("https://mail.ru/", "test", params);

      }
      $('[data-toggle="tooltip"]').tooltip();
   }
}

 // document.addEventListener('mousemove', parralax)

   // document.querySelector('.paralax').onclick = function () { 
   //    console.log('helo');

   // }

   // function paralax(event) {

   //    let V_contenta = document.querySelector('.content')


   //    last = window.scrollY
   //    console.log(last);
   //    document.querySelectorAll('.paralax__montain').forEach(paralax => {
   //       let speed = paralax.getAttribute('data-target');
   //       // paralax.style.transform = `translateY(${last * speed / 100}px)`       
   //    })
   // }