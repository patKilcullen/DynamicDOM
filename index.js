let websiteName = document.querySelector("#savedBookmark")
let bookmarkName = document.querySelector("#bookmarkName")
let addBookmark = document.querySelector('#addBookmark');
let listofBookmarks = document.querySelector('#userBookmarks')

let arrofBookmarks = []
// let arrtoRender = [];

function render() {
  let newList2 = []
arrofBookmarks.map(bookmark=>{
  let newList = document.createElement("li")
  newList.textContent = `${bookmark.siteName}`
  console.log(bookmark)
  
  newList.style.border = "2px solid black"
newList2.push(newList)
})
listofBookmarks.replaceChildren(...newList2)
}
// console.log(arrofBookmarks)

addBookmark.addEventListener('click',function(){
  let websiteValue = websiteName.value
  
  // console.log(websiteValue)
  let nameValue = bookmarkName.value
  // console.log(nameValue)
  // arrofBookmarks.push(websiteValue[nameValue])

  arrofBookmarks.push({siteName: websiteValue, markName: nameValue})
  console.log(arrofBookmarks)

  render()
  // { once: true }
})


