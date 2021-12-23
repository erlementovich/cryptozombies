// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

import "./zombieOwnership.sol";

contract ZombieFactories is ZombieOwnership {
    event SignatureAdded(string message, bytes32 name);

    bytes32[] public guests;

    function signBook(bytes32 name) public {
        guests.push(name);
        emit SignatureAdded("New guest signature!", name);
    }

    function getNames() public view returns (bytes32[] memory){
        return guests;
    }
}
