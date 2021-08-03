const portfolio = document.getElementById("portfolio")
const services = document.getElementById("services")
const contact = document.getElementById("contact")
const pDd = document.querySelector(".pf-dd")
const serDd = document.querySelector(".ser-dd")
const conDd = document.querySelector(".con-dd")

portfolio.addEventListener("mouseover", () => {
    portfolio.style.cssText = "display: flex; flex-Direction"
     pDd.style.cssText = "display: flex; flex-Direction: column; border-Radius: 10px"
     pDd.addEventListener("mouseover", () => {
         pDd.style.cssText = "display: flex; flex-Direction: column; border-Radius: 10px"
     })
     pDd.addEventListener("mouseleave", () => {
        pDd.style.cssText = "display: none;"
    })
})
portfolio.addEventListener("mouseleave", () => {
    pDd.style.cssText = "display: none"
})

services.addEventListener("mouseover", () => {
    services.style.cssText = "display: flex; flex-Direction"
     serDd.style.cssText = "display: flex; flex-Direction: column; border-Radius: 10px"
     serDd.addEventListener("mouseover", () => {
         serDd.style.cssText = "display: flex; flex-Direction: column; border-Radius: 10px"
     })
     serDd.addEventListener("mouseleave", () => {
        serDd.style.cssText = "display: none;"
    })
})
services.addEventListener("mouseleave", () => {
    serDd.style.cssText = "display: none"
})

contact.addEventListener("mouseover", () => {
    contact.style.cssText = "display: flex; flex-Direction"
     conDd.style.cssText = "display: flex; flex-Direction: column; border-Radius: 10px"
     conDd.addEventListener("mouseover", () => {
         conDd.style.cssText = "display: flex; flex-Direction: column; border-Radius: 10px"
     })
     conDd.addEventListener("mouseleave", () => {
        conDd.style.cssText = "display: none;"
    })
})
contact.addEventListener("mouseleave", () => {
    conDd.style.cssText = "display: none"
})