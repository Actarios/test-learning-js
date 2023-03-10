window.addEventListener('DOMContentLoaded', function() {

    'use strict'

    // Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent')

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show')
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1)

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide')
            tabContent[b].classList.add('show')
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0)
                    showTabContent(i)
                    break
                }
            }
        }
    })

    // Timer

    let deadline = '2023-02-10'

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date())
        let seconds = Math.floor((t/1000) % 60)
        let minutes = Math.floor((t/1000/60) % 60)
        let hours = Math.floor((t/(1000*3600) % 24))

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000)

        function updateClock() {
            let t = getTimeRemaining(endtime)

            hours.textContent = (t.hours < 10) ? '0' + t.hours : t.hours
            minutes.textContent = (t.minutes < 10) ? '0' + t.minutes : t.minutes
            seconds.textContent = (t.seconds < 10) ? '0' + t.seconds : t.seconds

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('timer', deadline)

    // Modal

    let more = document.querySelector('.more'),
        infoBlock = document.querySelector('.info'),
        tabsMore = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close')

    infoBlock.addEventListener('click', function(event) {
        if (event.target.classList.contains('description-btn')) {
            event.target.classList.add('more-splash')
            showModal()
        }
    })

    function showModal() {
        overlay.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    function hideModal() {
        overlay.style.display = 'none'
        document.body.style.overflow = ''
    }

    more.addEventListener('click', function() {
        this.classList.add('more-splash')
        showModal()
    })

    close.addEventListener('click', function() {
        more.classList.remove('more-splash')
        tabsMore.forEach((el) => {
            el.classList.remove('more-splash')
        })
        hideModal()
    })

})