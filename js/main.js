

window.addEventListener('DOMContentLoaded', () => {
    const navItem = document.querySelectorAll('.header__menu-item'),
          headerMenu = document.querySelector('.header__menu'),
          arrow = document.querySelector('.about__over__arrow'),
          links = document.querySelectorAll('a')

        function handleScroll() {
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const halfWindowHeight = window.innerHeight / 2;
        const scrollThreshold = (documentHeight - halfWindowHeight) / 2;
        
        if (scrollTop >= scrollThreshold) {
            navItem.forEach(item => {item.classList.remove('header__menu-item-active')})
            navItem[1].classList.add('header__menu-item-active');
        } else {
            navItem.forEach(item => {item.classList.remove('header__menu-item-active')})
            navItem[0].classList.add('header__menu-item-active');
        }
        }
        
        window.addEventListener('scroll', handleScroll);
   

    function removeActive () {
        navItem.forEach(item => {item.classList.remove('header__menu-item-active')})
    }

    navItem.forEach(item => {
        item.addEventListener('click', (e) => { 
            if (e.target === item) {
            removeActive();
            e.target.classList.add('header__menu-item-active');
            }
        })

    })
})