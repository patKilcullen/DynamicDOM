let websiteName = document.querySelector("#savedBookmark")
let bookmarkName = document.querySelector("#bookmarkName")
let addBookmark = document.querySelector('#addBookmark');
let listofBookmarks = document.querySelector('#userBookmarks')

let arrofBookmarks = []
// let arrtoRender = [];


arrtofBookmarks.map(bookmark=>{
    arrofBookmarks.append(bookmark)
    
})


addBookmark.addEventListener('click',function(){
  let websiteValue = websiteName.value
  
  // console.log(websiteValue)
  let nameValue = bookmarkName.value
  // console.log(nameValue)
  // arrofBookmarks.push(websiteValue[nameValue])

  arrofBookmarks.push({siteName: websiteValue, markName: nameValue})
  console.log(arrofBookmarks)
})


