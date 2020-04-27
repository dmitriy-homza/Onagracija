let header = document.querySelector('header');
let begin = document.querySelector('.begin');
let trim = document.querySelector('.hoof-trimming');
let prod = document.querySelector('.production');
let contacts = document.querySelector('.contacts');

window.onscroll = function() {
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("sticky");
      // Активные ссылки
        if (window.pageYOffset+150 >= begin.offsetTop) {
            document.getElementById('first').setAttribute('d', `M4543.5 184.5C4835 467 4752.5 2576.5 4679.5 2878C4606.5 3179.5 4562.5 3518 3998 3518C3505.14 3518 2770.5 3108.5 2358 3108.5C1575.32 3108.5 1336 3399.5 724 3310.5C227.558 3238.3 -1.00004 2886.5 -1 2621C-0.999962 2355.5 23.4998 1636 868 1520C1541.5 1443 1906 1609 2045.5 1322.5C2179.34 1047.63 1808 882.5 1855.5 491C1903 99.4999 2242 14.5171 2562.5 9.4999C2953.32 3.38186 4252 -98.0001 4543.5 184.5Z`);
        }
        if (window.pageYOffset+150 >= trim.offsetTop) {
            document.getElementById('first').setAttribute('d', `M4543.5 184.5C4835 467 4752.5 2576.5 4679.5 2878C4606.5 3179.5 4562.5 3518 3998 3518C3505.14 3518 2770.5 3108.5 2358 3108.5C1575.32 3108.5 1336 3399.5 724 3310.5C227.558 3238.3 -1.00005 2886.5 -1.00001 2621C-0.99997 2355.5 -135.02 184.5 464.5 184.5C692.5 184.5 712.363 157.819 884 211.5C1248.5 325.5 1808 882.5 1855.5 491C1903 99.4998 2242 14.517 2562.5 9.49981C2953.32 3.38176 4252 -98.0002 4543.5 184.5Z`);
      }
        if (window.pageYOffset+150 >= prod.offsetTop) {
            document.querySelector('ul li.active').classList.remove('active');
      }
        if (window.pageYOffset+400 >= contacts.offsetTop) {
            document.querySelector('ul li.active').classList.remove('active');
      }
    }
    else {
        header.classList.remove("sticky");
    };
  };