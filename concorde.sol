pragma solidity ^0.4.24;

contract Concord{
    
    uint32 public fee=10000;
    address public owner;
    string public content;
    
    
    mapping (address => bool) customers;
    
    constructor(string hash) public{
        owner = msg.sender;
        content = hash;
        //event update Thomson catalogue
        //emit New_image(_from,)
    }
    
    function buyContent() public payable {
        customers[msg.sender]=true;
        //buyers. // . add(msg.sender);
        owner.transfer(fee);
    }
    
    function check_legal() public view returns(bool) {
        return (customers[msg.sender]); 
    }
    
}
