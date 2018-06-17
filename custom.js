$(window).on('load', function () {
  // on Ropsten
  var contractAddress = "0x3fd2f126495a5e02ddaea1b1a36027b8c1c0ed58";
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

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    $('#content').text('I has web3!!!');
    window.web3 = new Web3(web3.currentProvider);
  } else {
    var errorMsg = 'I doesn\'t has web3 :( Please open in Google Chrome Browser and install the Metamask extension.';
    $('#content').text(errorMsg);
    console.log(errorMsg);
    return;
  }

  // create instance of contract object that we use to interface the smart contract
  var contractInstance = web3.eth.contract(contractAbi).at(contractAddress);

  function verify() {
    // TODO put buyers addres
    let savedHash = contractInstance.content({ from: buyerAddress });

    // TODO
    // 1. read file "cat01.jpg"
    // 2. and md5
    let computedHash = ''
    return (savedHash == computedHash && contractInstance.check_legal({ from: buyerAddress }));
  }

}
