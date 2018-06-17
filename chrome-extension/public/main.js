const images = document.querySelectorAll("img")
let verified = true

// TODO here solidity
const verifyHash = hash => hash == '34232432dasdsf'

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let data = request.data || {}
  console.log('something happening from the extension', data)

  images.forEach(img => {
    if (!img.attributes.ver) {
      verified = false
      img.classList.add('unverified')
      return false
    }

    let hash = verifyHash(img.attributes.ver.nodeValue)

    if (hash) {
      img.classList.add('verified')
    } else {
      verified = false
      img.classList.add('unverified')
    }

    return hash
  })

  let content = Array.from(document.querySelectorAll("img"))
    .map(({src, className}) => ({src, className}))

  console.log('content', document.querySelectorAll("img"))
  sendResponse({ data: JSON.stringify(content), success: true })
})

console.log('Exit ok', verified)

