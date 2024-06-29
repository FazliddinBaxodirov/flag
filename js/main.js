let elList = document.querySelector(".list")
let elSelect = document.querySelector(".select")
let elInput = document.querySelector(".input")
let elLikeBtn = document.querySelector(".like-btn")
let elSaveBtn = document.querySelector(".save-btn")

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
        elItemLikeBtn.id = value.id
        elItemBasketBtn.id = value.id
        
        arr2.append(elItem)
        elItem.append(elItemImg,elItemName,elItemCapital,elItemPopulation,elItemBtnWrapper)
        elItemBtnWrapper.append(elItemLikeBtn,elItemBasketBtn,elItemMoreBtn)
        
        elItemImg.src = value.flag
        elItemImg.className = "it hover:scale-105 w-[100%] h-[160px] rounded-[10px]"
        
        elItemName.textContent = "Name: " + value.name
        elItemCapital.textContent ="Capital: " + value.capital
        elItemPopulation.textContent ="Population: " + value.population

        
        elItem.className = "item cursor-pointer w-[300px] p-[8px] bg-blue-100 rounded-[12px]"
        elItemBtnWrapper.className = "flex justify-start gap-3 "
        
        elItemLikeBtn.innerHTML = `
        <svg id=${value.id} width="40px" height="30px" viewBox="0 0 24 24" fill=${value.isLike == true  ? "red" : "#fc6565"}  xmlns="http://www.w3.org/2000/svg">
        <path id=${value.id} d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill=${value.isLike == true  ? "red" : "#fc6561"}/>
        </svg>`
        elItemBasketBtn.innerHTML = `
        <svg id=${value.id} width="25px" height="30px" viewBox="0 0 24 24" fill=${value.isSave ? "#333" : "none"} xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" stroke-width="1"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="#9c9c9c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path id=${value.id}  d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#9c9c9c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path id=${value.id} d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#9c9c9c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>

        </svg>`

        elItemLikeBtn.addEventListener("click", (event) => {
            let findElement = list.find( (item) => item.id == event.target.id)
            findElement.isLike = !findElement.isLike
            if(value.isLike){
                document.getElementById("like-count").textContent = document.getElementById("like-count").textContent - 0 + 1
            }
            else{
                document.getElementById("like-count").textContent = document.getElementById("like-count").textContent - 0 - 1
            }
            
            Countries(list,elList)
        })
        
        elItemBasketBtn.addEventListener("click", (event) => {
            let findElement = list.find(item => item.id == event.target.id)
            findElement.isSave = !findElement.isSave
            if(value.isSave){
                document.getElementById("basket-count").textContent = document.getElementById("basket-count").textContent - 0 + 1
            }
            else{
                document.getElementById("basket-count").textContent = document.getElementById("basket-count").textContent - 0 - 1
            }
            Countries(list,elList)
        })


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

// let elLikes = 0;

// function likesCount() {
//   document.getElementById('like-count').textContent = elLikes;
// }

// document.querySelectorAll('.like-btn').forEach(button => {
//   button.addEventListener('click', () => {
//     elLikes++;
//     likesCount();
//   });
// });

// let elBaskets = 0;

// function basketCount(){
//     document.getElementById("basket-count").textContent = elBaskets
// }

// document.querySelectorAll('.basket-btn').forEach(button => {
//     button.addEventListener("click",() => {
//         elBaskets++;
//         basketCount();
//     }) 
// })


elLikeBtn.addEventListener("click", () => {
    let likedList = list.filter(value => value.isLike == true)
    Countries(likedList,elList)
})
elSaveBtn.addEventListener("click", () => {
    let savedList = list.filter(value => value.isSave == true)
    Countries(savedList,elList)
})