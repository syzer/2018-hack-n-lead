
$(window).on('load', function () {
  // on Ropsten
var contractAddress = "0x61d2ac594b2bce86bd68c5d98f83de65107084d4"; 
var buyerAddress = "0xb8a800fd20deb4801a32264984116918ff88f185";
  var contractAbi = [
    {
      "constant": false,
      "inputs": [],
      "name": "buyContent",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "check_legal",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "content",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "fee",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];



$(document).ready(function(){
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    var errorMsg = 'It doesn\'t have web3... Please install Metamask';
    $('#content').text(errorMsg);
    console.log(errorMsg);
    return;
  }


  // create instance of contract object that we use to interface the smart contract
  var contractInstance = web3.eth.contract(contractAbi).at(contractAddress);

  

  function buy() {
    // TODO when the Buy button is clicked, launch transaction on cat01.jpg
    let computedHash = '4ee335e88f548039eea9b1e7de3aa282';
    let buyerAddress = web3.eth.accounts[0];
	console.log(buyerAddress);
    var fee;
    contractInstance.fee({from:buyerAddress}, function(error, val) {if (!error) {fee=val;} else { fee=10000;}});
    console.log("fee "+fee);
    contractInstance.buyContent({from: buyerAddress, gas: 470400,value:10000 }, 
      function(error,transaction_hash) { if (!error) {
	console.log("bought it"); 
	console.log(transaction_hash);
	// offer the download of the acquired picture
	// link to the transaciton check
	let url = "\"https://ropsten.etherscan.io/tx/"+transaction_hash+"\"";
	$('#buy_receipt').html("<a href="+
		url+">See the transaction receipt</a>"); 
	// generate ready-to-copy html+js to verify to checks the rights on the picture 
console.log(
"<div class=\"container\" id=content_"+computedHash+">" + 
"<link rel=\"stylesheet\" type=\"text/css\" href=\"verified_content.css\"> "+
"<img src=\"cat01.jpg\" alt=\"cat\" class=\"image\" style=\"width:100%\" width=\"50\" height=\"50\" border=\"0\" >"+
"<div class=\"middle\"><div class=\"text\">"+"Owner,Time,date"+"</div></div>"
);
	//hide the buy button
	$('#buy').hide();
	} else {
	  console.error(error); 
	  return;}});
  }

  $('#buy').on('click', buy);

})

})
