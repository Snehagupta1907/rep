// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


contract OracleReader {
    IChronicle public BTC_USD = IChronicle(address(0x7a290ed3071FE06c5341f1A5CBF25aBbCE6F60ed));
    IChronicle public ETH_USD = IChronicle(address(0xea347Db6ef446e03745c441c17018eF3d641Bc8f));
    IChronicle public ARB_USD = IChronicle(address(0x87966246C322f2e6c3Db8CDBCDb7F22c60603D34));
    
    ISelfKisser public selfKisser = ISelfKisser(address(0x70E58b7A1c884fFFE7dbce5249337603a28b8422));

    constructor() {

        selfKisser.selfKiss(address(BTC_USD));
        selfKisser.selfKiss(address(ETH_USD));
        selfKisser.selfKiss(address(ARB_USD));
    }

    function read(uint _choice) external view returns (uint256 val, uint256 age) {
        if(_choice==1){
            (val, age) = BTC_USD.readWithAge();
        }else if(_choice==2){
            (val, age) = ETH_USD.readWithAge();
        }else if(_choice==3){
            (val, age) = ARB_USD.readWithAge();
        }   
    }
}

interface IChronicle {
    function read() external view returns (uint256 value);
    function readWithAge() external view returns (uint256 value, uint256 age);
}

interface ISelfKisser {
    function selfKiss(address oracle) external;
}