let elList = document.querySelector(".list")
let elSelect = document.querySelector(".select")
let elInput = document.querySelector(".input")

function Countries(arr1,arr2){
        elList.innerHTML = ""
    arr1.forEach(value => {
        let elItem = document.createElement("li")
        let elItemImg = document.createElement("img")
        let elItemName = document.createElement("h3")
        let elItemCapital = document.createElement("p")
        let elItemPopulation = document.createElement("p")
        let elItemBtnWrapper = document.createElement("div")
        let elItemLikeBtn = document.createElement("button")
        let elItemBasketBtn = document.createElement("button")
        let elItemMoreBtn = document.createElement("button")
        let elItemLikeBtnImg = document.createElement("img")
        let elItemBasketBtnImg = document.createElement("img")
        let elItemMoreBtnImg = document.createElement("img")

        
        arr2.append(elItem)
        elItem.append(elItemImg,elItemName,elItemCapital,elItemPopulation,elItemBtnWrapper)
        elItemBtnWrapper.append(elItemLikeBtn,elItemBasketBtn,elItemMoreBtn)
        
        elItemImg.src = value.flag
        elItemImg.className = "item hover:scale-105 w-[100%] h-[160px] rounded-[10px]"
        
        elItemName.textContent = "Name: " + value.name
        elItemCapital.textContent ="Capital: " + value.capital
        elItemPopulation.textContent ="Population: " + value.population


        elItem.className = "item cursor-pointer w-[300px] p-[8px] bg-blue-100 rounded-[12px]"
        elItemLikeBtn.className = "like-btn"
        elItemBasketBtn.className = "basket-btn"

        elItemLikeBtn.append(elItemLikeBtnImg)
        elItemBasketBtn.append(elItemBasketBtnImg)
        elItemMoreBtn.append(elItemMoreBtnImg)
        elItemLikeBtnImg.src = "./img/like.svg"
        elItemBasketBtnImg.src = "./img/basket.svg"
        elItemLikeBtn.id = "like-button"
        elItemMoreBtnImg.src = "./img/more.svg"


        elItemBtnWrapper.className = "flex justify-start gap-3 "
        elItemLikeBtnImg.className = "w-[40px] h-[40px] "
        elItemBasketBtnImg.className = "w-[35px] h-[35px]"
        elItemMoreBtnImg.className = "w-[40px] h-[40px]" 

    });
}
  

Countries(list,elList)






let elModeBtn = document.querySelector(".mode-btn")
let elMain = document.querySelector("section")
let elselect = document.querySelector(".select")
let elFirstImg = document.querySelector(".img1")
let elSecondImg = document.querySelector(".img")

elModeBtn.addEventListener("click", function(){
    document.body.classList.toggle("mode")
    elMain.classList.remove("bg-slate-100")
    elselect.classList.add("text-black")
    if(document.body.classList == "mode"){
        elFirstImg.setAttribute("src", "./img/mion2.svg")
    }
    else{
        elFirstImg.setAttribute("src", "./img/mion.svg")
    }
    if(document.body.classList == "mode"){
        elSecondImg.setAttribute("src", "./img/basket2.svg")
    }
    else{
        elSecondImg.setAttribute("src", "./img/basket.svg")
    }
})

list.forEach(value => {
    let elOption = document.createElement("option")
    elOption.innerHTML = value.name
    elOption.setAttribute("value", value.name)
    elselect.append(elOption)
})

elselect.addEventListener("change", (event) => {
    if(event.target.value == "All"){
        Countries(list,elList)
    }
    else{
        let elSelected = list.filter(val => val.name == event.target.value)
        Countries(elSelected,elList)
    }
})

elInput.addEventListener("keyup", (event) =>{
    if(Number(event.target.value)){
        let filterList = list.filter(item => String(item.population).includes(event.target.value.trim()))
        Countries(filterList,elList)
    }
    else{
        let filterList = list.filter(item => item.name.toLowerCase().includes(event.target.value.trim().toLowerCase()))
        Countries(filterList,elList)
    }
})

let elLikes = 0;

function likesCount() {
  document.getElementById('like-count').textContent = elLikes;
}

document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    elLikes++;
    likesCount();
  });
});

let elBaskets = 0;

function basketCount(){
    document.getElementById("basket-count").textContent = elBaskets
}

document.querySelectorAll('.basket-btn').forEach(button => {
    button.addEventListener("click",() => {
        elBaskets++;
        basketCount();
    }) 
})