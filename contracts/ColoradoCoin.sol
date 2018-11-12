pragma solidity ^0.4.8;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract ColoradoCoin is MintableToken {

    function () {
        //if ether is sent to this address, send it back.
        throw;
    }

    string public name = "ColoradoCoin";
    uint8 public decimals = 18;
    string public symbol = "COLO";
    string public version = "0.1";

}