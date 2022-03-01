
const h = document.querySelector('.home')
const p = document.querySelector('.projects')
const a = document.querySelector('.about')
const c = document.querySelector('.contact')
const sideNav = document.querySelector('.side-nav')
const sideLinks = document.querySelectorAll('.side-link')

function scrollFunction(){
    if(document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
        sideLinks.forEach((link)=>{
            link.style.display = 'flex'
            link.style.animation = '1s side'
        })
        h.addEventListener('mouseover', ()=>{
                h.textContent = 'Home'
                h.style.width = '4rem'
                h.style.height = '2rem'
                h.style.borderRadius = '10px'
                h.style.transition = '.1s'
        })
        h.addEventListener('mouseout', ()=>{
            h.textContent = 'H'
            h.style.width = ''
            h.style.height = ''
            h.style.borderRadius = ''
        })

        p.addEventListener('mouseover', ()=>{
                p.textContent = 'Projects'
                p.style.width = '4rem'
                p.style.height = '2rem'
                p.style.borderRadius = '10px'
                p.style.transition = '.1s'
        })
        p.addEventListener('mouseout', ()=>{
            p.textContent = 'P'
            p.style.width = ''
            p.style.height = ''
            p.style.borderRadius = ''
        })

        a.addEventListener('mouseover', ()=>{
                a.textContent = 'About'
                a.style.width = '4rem'
                a.style.height = '2rem'
                a.style.borderRadius = '10px'
                a.style.transition = '.1s'
        })
        a.addEventListener('mouseout', ()=>{
            a.textContent = 'A'
            a.style.width = ''
            a.style.height = ''
            a.style.borderRadius = ''
        })

        c.addEventListener('mouseover', ()=>{
                c.textContent = 'Contact'
                c.style.width = '4rem'
                c.style.height = '2rem'
                c.style.borderRadius = '10px'
                c.style.transition = '.1s'
        })
        c.addEventListener('mouseout', ()=>{
            c.textContent = 'C'
            c.style.width = ''
            c.style.height = ''
            c.style.borderRadius = ''
        })

    }else{  
        sideLinks.forEach((link)=>{
            link.style.display = 'none'
            link.style.animation = '1s side'
        }) 
}}
window.onscroll = function(){scrollFunction()}