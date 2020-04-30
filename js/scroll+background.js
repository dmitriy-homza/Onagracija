let header = document.querySelector('header');
let begin = document.querySelector('.begin');
let trim = document.querySelector('.hoof-trimming');
let prod = document.querySelector('.production');
let contacts = document.querySelector('.contacts');

//Определение браузера
var a;
if (navigator.userAgent.search(/Safari/) > 0) {a = 'Safari'};
if (navigator.userAgent.search(/Firefox/) > 0) {a = 'MozillaFirefox'};
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {a = 'Internet Explorer'};
if (navigator.userAgent.search(/Chrome/) > 0) {a = 'Google Chrome'};
if (navigator.userAgent.search(/YaBrowser/) > 0) {a = 'Яндекс браузер'};
if (navigator.userAgent.search(/OPR/) > 0) {a = 'Opera'};
if (navigator.userAgent.search(/Konqueror/) > 0) {a = 'Konqueror'};
if (navigator.userAgent.search(/Iceweasel/) > 0) {a = 'Debian Iceweasel'};
if (navigator.userAgent.search(/SeaMonkey/) > 0) {a = 'SeaMonkey'};
if (navigator.userAgent.search(/Edge/) > 0) {a = 'Microsoft Edge'};

window.onscroll = function() {

    if (a != 'MozillaFirefox') {
        if (window.pageYOffset> header.offsetTop + 3) {
          header.classList.add("sticky");
            if (window.pageYOffset+150 >= begin.offsetTop) {
                document.querySelector('ul li.active').classList.remove('active');
                oddNavLink[0].classList.add('active');
                document.getElementById('first').setAttribute('d', `M4543.5 184.5C4835 467 4752.5 2576.5 4679.5 2878C4606.5 3179.5 4562.5 3518 3998 3518C3505.14 3518 2770.5 3108.5 2358 3108.5C1575.32 3108.5 1336 3399.5 724 3310.5C227.558 3238.3 -1.00004 2886.5 -1 2621C-0.999962 2355.5 23.4998 1636 868 1520C1541.5 1443 1906 1609 2045.5 1322.5C2179.34 1047.63 1808 882.5 1855.5 491C1903 99.4999 2242 14.5171 2562.5 9.4999C2953.32 3.38186 4252 -98.0001 4543.5 184.5Z`);
            }
            if (window.pageYOffset+document.documentElement.clientHeight / 2 >= trim.offsetTop) {
                document.querySelector('ul li.active').classList.remove('active');
                oddNavLink[1].classList.add('active');
                document.getElementById('first').setAttribute('d', "M4422.47 825.182C4755.75 1180.54 4559.67 1952.89 4422.47 2133.4C4285.27 2313.91 4287.56 2318.94 3823.95 2643.48C3348.52 2976.28 2854.41 3033.42 2331.35 2829.02C1452.38 2485.52 1445.85 2894.43 838.747 2773.04C572.618 2719.83 400.859 2541.59 282.526 2318.94C164.193 2096.29 -418.9 920.783 546.63 774.866C1316.65 678.008 1733.39 886.819 1892.88 526.431C2045.9 180.672 2170.71 5.03843e-05 2558.87 0C2947.02 -5.03843e-05 3482.47 224.711 3823.95 371.08C4186.38 526.431 4089.2 469.825 4422.47 825.182Z");
            }
            if (window.pageYOffset+document.documentElement.clientHeight / 2 >= prod.offsetTop) {       
                document.querySelector('ul li.active').classList.remove('active');
                oddNavLink[2].classList.add('active');
                document.getElementById('first').setAttribute('d', "M4461 1234.5C4794.28 1589.86 4504.76 2103.92 4147.5 2426.48C3821.14 2721.13 3482.63 2606.09 3046.5 2662C2658.4 2711.75 2046 2715.5 2046 2715.5C2046 2715.5 1383.85 2677.43 776.748 2556.04C510.618 2502.83 338.859 2324.58 220.526 2101.94C102.193 1879.29 -284.802 532.39 378 154.08C603.577 25.327 1138.5 7.6294e-05 1472 0C1850.11 -8.64983e-05 1775.82 424.708 2046 608.182C2338.44 806.775 2543.27 875.98 2893 927.5C3473.23 1012.98 4127.72 879.143 4461 1234.5Z");
                //document.querySelector('ul li.active').classList.remove('active');
          }
            if (window.pageYOffset+400 >= contacts.offsetTop) {
                document.querySelector('ul li.active').classList.remove('active');
                oddNavLink[3].classList.add('active');
                document.getElementById('first').setAttribute('d', "M4165 119C4498.28 474.357 4492.17 1558.63 3884.5 2000.5C3475.04 2298.24 3136.05 2151.53 2630.5 2178.47C2208.94 2200.94 1549.5 2178.47 1549.5 2178.47C1549.5 2178.47 1040.98 2210.45 749 2094C452.283 1975.66 138.209 1992.07 102 1593.5C50.3563 1025.03 -32.1482 932.465 15.0002 546C56.8361 203.08 175.928 159.93 395.5 119C682.5 65.5 947.848 229.171 1182.5 546C1429.5 879.5 2344.25 1024.56 2770.5 546C2990.5 299 3831.72 -236.357 4165 119Z");
          }
        }
        else {
            header.classList.remove("sticky");
        };
    }
    else {
        if (window.pageYOffset > header.offsetTop) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        };
    }

  };


  let oddNavLink = document.querySelector('nav ul').children;
  for (i=0; i<oddNavLink.length; i++) {
    oddNavLink[i].addEventListener('click', function(){
    isNotBurger();  
    document.querySelector('nav li.active').classList.remove('active');
    this.classList.add('active');
    let blockID = this.querySelector('a').getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
  });
  };