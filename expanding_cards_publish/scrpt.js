const panels = document.querySelectorAll('.panel')

// panels.forEach(panel =>{
//     panel.addEventListener('click',()=>{
//         panel.classList.remove('active')
//         panel.classList.add('active')
//     })
// })
//我原先這樣寫，但發現active只會被加上去，並拿不掉
//因為這樣寫，只會對作用在被點擊的panel，無法影響其他panel

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//反倒這樣寫，點擊任意的panel，都會再抓出每個panel把active拿掉

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

