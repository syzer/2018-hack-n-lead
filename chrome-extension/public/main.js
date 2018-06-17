const images = document.querySelectorAll("img")
let verified = true

// TODO here solidity
const verifyHash = hash => hash == '34232432dasdsf'

images.forEach(img => {
  console.log(img.attributes)

  if (!img.attributes.ver) {
    verified = false
    img.classList.add("unverified")
    return false
  }

  let hash = verifyHash(img.attributes.ver.nodeValue)

  console.log('img.attributes.ver.nodeValue', img.attributes.ver.nodeValue)

  if (hash) {
    img.classList.add("verified")
  } else {
    verified = false
    img.classList.add("unverified")
  }

  return hash
})


console.log('Exit ok', verified)

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("something happening from the extension")
  let data = request.data || {}
  let linksList = document.querySelectorAll('a');
  [].forEach.call(linksList, function (header) {
    header.innerHTML = request.data;
  })
  sendResponse({ data: data, success: true })
})
