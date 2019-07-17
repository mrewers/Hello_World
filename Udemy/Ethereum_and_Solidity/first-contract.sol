pragma solidity ^0.4.17;

contract Inbox {
  string public message;

  function Inbox(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }

  // This function is made redundant byt the initial storage variable message
  // function getMessage() public view returns (string) {
  //   return message;
  // }
}