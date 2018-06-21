
$(window).on('load', function () {
console.log('hello');
//Web3 = require('~/ethereum_voting_dapp/chapter1/web3')
//Web3 = require('web3');
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//VotingContract = web3.eth.contract(abiDef);
//contractInstance = ConcordeContract.at('0x0fdf4894a3b7c5a101686829063be52ad45bcfb7');
  // on Ropsten
//  var contractAddress = "0x3fd2f126495a5e02ddaea1b1a36027b8c1c0ed58";
var contractAddress = "0x61d2ac594b2bce86bd68c5d98f83de65107084d4"; 
//  var buyerAddress = "0xbc3c30edd3b1894a1f29af1edcd4a3308f02b6ef";
//var buyerAddress = "0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db";
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
console.log("Found web3");
    // Use Mist/MetaMask's provider
    $('#content').text('It has web3!!!');
    window.web3 = new Web3(web3.currentProvider);
  } else {
    
    //Web3 = require('web3');
    
    var errorMsg = 'It doesn\'t have web3...';
    $('#content').text(errorMsg);
    console.log(errorMsg);
    //return;
  }


  // create instance of contract object that we use to interface the smart contract
  var contractInstance = web3.eth.contract(contractAbi).at(contractAddress);

  

  function verify() {
    // TODO read and md5 cat01.jpg
    let computedHash = '4ee335e88f548039eea9b1e7de3aa282'
    var savedHash
    contractInstance.content({ from: buyerAddress, gas: 470400 }, function(error,res) { if (!error) {
	console.log("got it"); 
	console.log(res);
    console.log("comparing to the actual pic" + res + " == " + computedHash);
	savedHash = res;
	} else {
console.error(error); return;}})
    let callback = function(error,legal){
	if(!error) {    
		console.log(legal);
		if ((savedHash == computedHash) && legal ){
			$('#verification_result').text("Verified");	
     		} else {
			$('#verification_result').text("Verification failed");	
			
		}
        } else console.error(error);}
   contractInstance.check_legal({ from: buyerAddress, gas: 470400}, callback )
  }

  $('#verify').on('click', verify);

})

})
