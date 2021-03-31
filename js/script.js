window.addEventListener("DOMContentLoaded", function() {
    "use strict"; 
    let tab = document.querySelectorAll(".list__item"), 
        info = document.querySelector(".list"), 
        tabContent = document.querySelectorAll(".info"); 
    
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove("show"); 
                tabContent[i].classList.add("hide"); 
            }
        }
      
        hideTabContent(1);
      
        function showTabContent(b) {
            if (tabContent[b].classList.contains("hide")) {
                tabContent[b].classList.remove("hide"); 
                tabContent[b].classList.add("show"); 
            }
        }
      
        info.addEventListener("click", function(event) {
            let target = event.target; 
      
            if (target && target.classList.contains("list__item")) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0); 
                        showTabContent(i); 
                        break;
                    }
                }
            }
        });

});

let tabContentImg = document.querySelectorAll('.info__img'), 
    tabContentTitle = document.querySelectorAll('.info__title'); 
tabContentImg[0].style.background = '#BA55D3';
tabContentImg[0].style.color = '#00FFFF';
tabContentImg[1].style.background = '#FF00FF';
tabContentImg[1].style.color = '#D3D3D3';
tabContentImg[2].style.background = '#FF1493';
tabContentImg[2].style.color = '#FFC0CB';

for (let i = 0; i < 3; i++) {
    tabContentTitle[i].style.color = tabContentImg[i].style.color;
}