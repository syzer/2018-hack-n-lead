// if (typeof web3 !== 'undefined') {
//   window.web3 = new Web3(web3.currentProvider)
// } else {

// }

// const config = {
//   contractAddress: '0x651493d194e7cdb2561e9afd41ea2db9a55e3f0c',
//   contractABI: require('./abi.json')
// }

const images = document.querySelectorAll("img")
let verified = true

console.log('foo:' + md5('foo'))

// const getHashFromBlockchain = function (address) {
//   // solidity something something
//   const contract = window.web3.eth.contract(config.contractABI).at(contractAddress)

//   // 1. get all external components with attribute ref and extract ref & src attribute
//   // 2. do the checksum of the src content
//   // 3. compare the generated checksum with the contract content checksum from the blockchain
//   // 4. success or fail
//   contract
//   // return hash
//   return '34232432dasdsf'
// }

// const scrapeRefs = ''

// // TODO here solidity
// const verifyHash = address => {
//   return hash == getHashFromBlockchain(address)
// }

// function getBase64(file) {
//    var reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = function () {
//      hash
//      console.log(reader.result);
//    };
//    reader.onerror = function (error) {
//      console.log('Error: ', error);
//    };
// }



// var file = document.querySelector('#files > input[type="file"]').files[0];
// getBase64(file); // prints the base64 string

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let data = request.data || {}
  console.log('something happening from the extension', data)

  images.forEach(img => {
    // hook in here sha
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

