
const menu_icon = document.getElementById('menu_icon')
const hidden_menu_div = document.querySelector('.hidden_menu_div')
const close_menu_icon = document.querySelector('.close_menu_icon')
const container_fluid_nav = document.querySelector('.container-fluid-nav')

let flag = false

menu_icon.addEventListener('click', function(){
    
    if (!flag) {
        flag = true
    }
    else{
        flag = false
    }
    
    if (flag) {
        hidden_menu_div.style.display  = "block"
        container_fluid_nav.style.filter = "blur(2px)"
    }

})

close_menu_icon.addEventListener('click', function(){
    
    if (!flag) {
        flag = true
       
    }
    else{
        flag = false
    }
    
    if (!flag) {
        hidden_menu_div.style.display  = "none"
        container_fluid_nav.style.filter = "blur(0)"
    
    }

})

gsap.to(".line",{
    height:"200px",
    duration:1
})
gsap.to(".lessthen_greater_then",{
    opacity:1,
    delay:1
})


gsap.to(".second_line",{
    height:"300px",
    duration:1,
    delay:2
})

let TL = gsap.timeline({scrollTrigger:{
    trigger:".secondline",
    start:"0% 50%",
    end:"25% 35%",
    scrub:"true",
    markers:false
}})


TL.to(".brifcase_icon",{
    opacity:"1",
    delay:2
})
TL.to(".third_line",{
    height:"170px"
})

let TL1 = gsap.timeline({scrollTrigger:{
    trigger:".code_img_div",
    start:"0% 50%",
    end:"100% 15%",
    scrub:"true",
    markers:false
}})

TL1.from(".code1",{
    duration:5,
    left:"200px",
    opacity:0
})



TL1.from(".code_img",{
    position:"absolute",
    duration:5,
    delay:2,
    right:"-500px"
})

TL1.to(".fouth_line",{
    height:"700px",
    duration:5
}, "curve")

TL1.from(".curve_line_img",{
    opacity:0,
    delay:1
}, "curve")



let TL2 = gsap.timeline({scrollTrigger:{
    trigger:".Application_security_main_div",
    start:"0% 50%",
    end:"100% 15%",
    scrub:"true",
    markers:false
}})


TL2.to(".fivth_line", {
    height:"150px",
    duration:3
})

TL2.to(".locker_icon", {
    opacity:1,
})

TL2.to(".sixth_line", {
    height:"200px",
    duration:2
})
TL2.from(".llu_Img_div", {
    position:"absolute",
    duration:5,
    right:"-500px"
})


let TL3 = gsap.timeline({scrollTrigger:{
    trigger:".collaboration_Main_div",
    start:"0% 50%",
    end:"100% 15%",
    scrub:"true",
    markers:false
}})


TL3.to(".seventh_line",{
    height:"150px",
    duration:3
})

TL3.to(".handshake_icon", {
 
    opacity:1,
})

TL3.to(".eight_line",{
    height:"300px",
    duration:3
})

// const content_box_2 = document.querySelector('.content_box_2')
// 
// let x = content_box_2.getBoundingClientRect()
// console.log(x);
