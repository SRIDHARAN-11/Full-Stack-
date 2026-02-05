var popupOverLay=document.querySelector(".popup-over-lay")
var popupBox=document.querySelector(".popup-Box")
var addPopupbutton=document.getElementById("add-popup-button")

addPopupbutton.addEventListener("click",function(){
    popupOverLay.style.display="block"
    popupBox.style.display="block"
})

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupOverLay.style.display="none"
    popupBox.style.display="none"
})

var container=document.querySelector(".container")
var addBook=document.getElementById("Add-book")
var bookTitleInput=document.getElementById("book-title-input")
var bookauthorInput=document.getElementById("book-author-input")
var bookDescriptionInput=document.getElementById("book-description-input")

addBook.addEventListener("click",function(){
    event.preventDefault()    
    var div=document.createElement("div")
    div.setAttribute("class","Book-container")
    div.innerHTML=` <h2>${bookTitleInput.value}</h2>
            <h5>${bookauthorInput.value}</h5>
            <p>${bookDescriptionInput.value}</p>
            <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
    popupOverLay.style.display="none"
    popupBox.style.display="none"
})

function deleteBook(event){
    event.target.parentElement.remove();
}
