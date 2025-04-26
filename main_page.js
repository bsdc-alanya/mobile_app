function randInt(max) {
    return Math.floor(Math.random() * max)
}

lists = [
    document.getElementById("mostpopular"), 
    document.getElementById("recommended"), 
    document.getElementById("similarbookings")
]

items = [
    {type: "keyboard", img: "res/Keyboardstars.png"},
    {type: "mouse", img: "res/multicoloured-mouse.avif"}
]

for (const i in lists) {
    itemamount = randInt(5) + 3
    for (let j = 0; j != itemamount; j++) {
        itemid = randInt(items.length)
        itemtype = items[itemid]
        itemelement = document.createElement("img")

        itemelement.src = itemtype.img
        itemelement.onclick = function() {window.location.href = `product_page.html?item=${itemtype.type}`}
        itemelement.style.width = "200px"
        itemelement.style.borderRadius = "10%"

        lists[i].appendChild(itemelement)
    }
}
