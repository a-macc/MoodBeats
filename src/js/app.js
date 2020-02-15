const token={
  "contractName": "Token",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "count",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
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
      "name": "standard",
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
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
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
      "inputs": [
        {
          "name": "initialSupply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "distribute",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "address"
        }
      ],
      "name": "getBalanceOther",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"count\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"standard\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"id\",\"type\":\"address\"}],\"name\":\"getBalanceOther\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"distribute\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"initialSupply\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/thenullterminator/MoodBeats/contracts/Token.sol\":\"Token\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/thenullterminator/MoodBeats/contracts/Token.sol\":{\"keccak256\":\"0xa0a1c40d0dda70ec73211996a2d9637c1ba503fd6e5adc78b4b6b3f8aa7d1825\",\"urls\":[\"bzzr://6d316424526d311ca759ee16664239eb9adfed99272817510c8918cba7814880\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280600581526020017f546f6b656e0000000000000000000000000000000000000000000000000000008152506000908051906020019061004f9291906101db565b506040518060400160405280600181526020017f54000000000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b9291906101db565b506040518060400160405280600a81526020017f546f6b656e2076312e3000000000000000000000000000000000000000000000815250600290805190602001906100e79291906101db565b503480156100f457600080fd5b50604051602080610d4e8339810180604052602081101561011457600080fd5b810190808051906020019092919050505033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555060035460056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050610280565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021c57805160ff191683800117855561024a565b8280016001018555821561024a579182015b8281111561024957825182559160200191906001019061022e565b5b509050610257919061025b565b5090565b61027d91905b80821115610279576000816000905550600101610261565b5090565b90565b610abf8061028f6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80635bc5b0c7116100665780635bc5b0c7146101da57806370a082311461023257806391c05b0b1461028a57806395d89b41146102d0578063a9059cbb1461035357610093565b806306661abd1461009857806306fdde03146100b657806312065fe0146101395780635a3b7e4214610157575b600080fd5b6100a06103b9565b6040518082815260200191505060405180910390f35b6100be6103bf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fe5780820151818401526020810190506100e3565b50505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61014161045d565b6040518082815260200191505060405180910390f35b61015f6104a4565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019f578082015181840152602081019050610184565b50505050905090810190601f1680156101cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c600480360360208110156101f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610542565b6040518082815260200191505060405180910390f35b6102746004803603602081101561024857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610631565b6040518082815260200191505060405180910390f35b6102b6600480360360208110156102a057600080fd5b8101908080359060200190929190505050610649565b604051808215151515815260200191505060405180910390f35b6102d86107e6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103185780820151818401526020810190506102fd565b50505050905090810190601f1680156103455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61039f6004803603604081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610884565b604051808215151515815260200191505060405180910390f35b60065481565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b505050505081565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b505050505081565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105ea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610a616033913960400191505060405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60056020528060005260406000206000915090505481565b60008160056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610721576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b8160056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555060019050919050565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561087c5780601f106108515761010080835404028352916020019161087c565b820191906000526020600020905b81548152906001019060200180831161085f57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161093a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8484604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a2600190509291505056fe4f6e6c79206f776e657220697320616c6c6f77656420746f206765742062616c616e6365206f66206f74686572207573657273a165627a7a72305820caecffe6981f88d8d23e10a3788f187ae7bf1ef5728d61f896c588a239e5f0a80029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c80635bc5b0c7116100665780635bc5b0c7146101da57806370a082311461023257806391c05b0b1461028a57806395d89b41146102d0578063a9059cbb1461035357610093565b806306661abd1461009857806306fdde03146100b657806312065fe0146101395780635a3b7e4214610157575b600080fd5b6100a06103b9565b6040518082815260200191505060405180910390f35b6100be6103bf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fe5780820151818401526020810190506100e3565b50505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61014161045d565b6040518082815260200191505060405180910390f35b61015f6104a4565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019f578082015181840152602081019050610184565b50505050905090810190601f1680156101cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c600480360360208110156101f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610542565b6040518082815260200191505060405180910390f35b6102746004803603602081101561024857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610631565b6040518082815260200191505060405180910390f35b6102b6600480360360208110156102a057600080fd5b8101908080359060200190929190505050610649565b604051808215151515815260200191505060405180910390f35b6102d86107e6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103185780820151818401526020810190506102fd565b50505050905090810190601f1680156103455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61039f6004803603604081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610884565b604051808215151515815260200191505060405180910390f35b60065481565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b505050505081565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b505050505081565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105ea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610a616033913960400191505060405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60056020528060005260406000206000915090505481565b60008160056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610721576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b8160056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555060019050919050565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561087c5780601f106108515761010080835404028352916020019161087c565b820191906000526020600020905b81548152906001019060200180831161085f57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161093a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8484604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a2600190509291505056fe4f6e6c79206f776e657220697320616c6c6f77656420746f206765742062616c616e6365206f66206f74686572207573657273a165627a7a72305820caecffe6981f88d8d23e10a3788f187ae7bf1ef5728d61f896c588a239e5f0a80029",
  "sourceMap": "25:1412:1:-;;;50:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;85:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;118:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;427:155;8:9:-1;5:2;;;30:1;27;20:12;5:2;427:155:1;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;427:155:1;;;;;;;;;;;;;;;;488:10;480:5;;:18;;;;;;;;;;;;;;;;;;522:13;508:11;:27;;;;564:11;;545:9;:16;555:5;;;;;;;;;;;545:16;;;;;;;;;;;;;;;:30;;;;427:155;25:1412;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "25:1412:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:1412:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;293:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;50:29;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;50:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1135:97;;;:::i;:::-;;;;;;;;;;;;;;;;;;;118:38;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;118:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1238:197;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1238:197:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;242:45;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;242:45:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;886:242;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;886:242:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;85:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;85:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:292;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;588:292:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;293:20;;;;:::o;50:29::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1135:97::-;1178:7;1204:9;:21;1214:10;1204:21;;;;;;;;;;;;;;;;1197:28;;1135:97;:::o;118:38::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1238:197::-;1296:7;1337:5;;;;;;;;;;;1323:19;;:10;:19;;;1315:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1415:9;:13;1425:2;1415:13;;;;;;;;;;;;;;;;1408:20;;1238:197;;;:::o;242:45::-;;;;;;;;;;;;;;;;;:::o;886:242::-;937:4;979:5;960:9;:16;970:5;;;;;;;;;;;960:16;;;;;;;;;;;;;;;;:24;952:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1039:5;1019:9;:16;1029:5;;;;;;;;;;;1019:16;;;;;;;;;;;;;;;;:25;;;;;;;;;;;1085:5;1060:9;:21;1070:10;1060:21;;;;;;;;;;;;;;;;:30;;;;;;;;;;;1117:4;1110:11;;886:242;;;:::o;85:27::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;588:292::-;649:4;696:5;672:9;:21;682:10;672:21;;;;;;;;;;;;;;;;:29;664:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;761:5;736:9;:21;746:10;736:21;;;;;;;;;;;;;;;;:30;;;;;;;;;;;799:5;782:9;:13;792:2;782:13;;;;;;;;;;;;;;;;:22;;;;;;;;;;;829:10;820:31;;;841:2;845:5;820:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;869:4;862:11;;588:292;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract Token{\n    \n    string  public name = \"Token\";\n    string  public symbol = \"T\";\n    string  public standard = \"Token v1.0\";\n    uint256 private totalSupply;\n    address owner;\n\n\n    // address to balance\n    mapping (address => uint256) public balanceOf;\n    uint256 public count;\n    event Transfer(\n        address indexed _from,\n        address _to,\n        uint256 _value\n    );\n\n   \n\n    constructor (uint256 initialSupply) public {\n        owner = msg.sender;\n        totalSupply = initialSupply;\n        balanceOf[owner] = totalSupply;\n    }\n\n    function transfer(address to, uint256 value) public returns (bool){\n        require(balanceOf[msg.sender] > value,\"Insufficient balance\");\n\n        balanceOf[msg.sender] -= value;\n\n    \n        balanceOf[to] += value;\n\n        emit Transfer(msg.sender, to, value);\n\n        return true;\n    }\n\n    function distribute(uint256 value) public returns (bool){\n        require(balanceOf[owner] > value,\"Insufficient balance\");\n\n        balanceOf[owner] -= value;\n\n    \n        balanceOf[msg.sender] += value;\n\n       \n\n        return true;\n    }\n\n\n    function getBalance() public view returns (uint256) {\n        return balanceOf[msg.sender];\n    }\n\n    function getBalanceOther(address id) public view returns (uint256) {\n        require(msg.sender == owner,\"Only owner is allowed to get balance of other users\");\n\n        return balanceOf[id];\n    }\n}\n",
  "sourcePath": "/home/thenullterminator/MoodBeats/contracts/Token.sol",
  "ast": {
    "absolutePath": "/home/thenullterminator/MoodBeats/contracts/Token.sol",
    "exportedSymbols": {
      "Token": [
        212
      ]
    },
    "id": 213,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 212,
        "linearizedBaseContracts": [
          212
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 61,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "50:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 59,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "50:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "546f6b656e",
              "id": 60,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "72:7:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_1317f51c845ce3bfb7c268e5337a825f12f3d0af9584c2bbfbf4e64e314eaf73",
                "typeString": "literal_string \"Token\""
              },
              "value": "Token"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 64,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "85:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 62,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "85:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "54",
              "id": 63,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "109:3:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_846b7b6deb1cfa110d0ea7ec6162a7123b761785528db70cceed5143183b11fc",
                "typeString": "literal_string \"T\""
              },
              "value": "T"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 67,
            "name": "standard",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "118:38:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 65,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "118:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "546f6b656e2076312e30",
              "id": 66,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "144:12:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_0cfdb60672e8de333a080fbea680c5da51002b0163dddd1a8f712d5fda5187a1",
                "typeString": "literal_string \"Token v1.0\""
              },
              "value": "Token v1.0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 69,
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "162:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "162:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 71,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "195:13:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 70,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "195:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 75,
            "name": "balanceOf",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "242:45:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 74,
              "keyType": {
                "id": 72,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "251:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "242:28:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 73,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 77,
            "name": "count",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "293:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 76,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "293:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 85,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 85,
                  "src": "343:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 81,
                  "indexed": false,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 85,
                  "src": "374:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 83,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 85,
                  "src": "395:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "395:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "333:82:1"
            },
            "src": "319:97:1"
          },
          {
            "body": {
              "id": 105,
              "nodeType": "Block",
              "src": "470:112:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 90,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "480:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 227,
                        "src": "488:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 92,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "488:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "480:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 94,
                  "nodeType": "ExpressionStatement",
                  "src": "480:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "508:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 96,
                      "name": "initialSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 87,
                      "src": "522:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "508:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "508:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "545:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 101,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "555:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "545:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 102,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "564:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "545:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 104,
                  "nodeType": "ExpressionStatement",
                  "src": "545:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 106,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 87,
                  "name": "initialSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 106,
                  "src": "440:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 86,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:23:1"
            },
            "returnParameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "470:0:1"
            },
            "scope": 212,
            "src": "427:155:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "654:226:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 116,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "672:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 119,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 227,
                              "src": "682:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "682:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "672:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 120,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 110,
                          "src": "696:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "672:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e742062616c616e6365",
                        "id": 122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "702:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        },
                        "value": "Insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        }
                      ],
                      "id": 115,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        230,
                        231
                      ],
                      "referencedDeclaration": 231,
                      "src": "664:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "664:61:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 124,
                  "nodeType": "ExpressionStatement",
                  "src": "664:61:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 125,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "736:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 128,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 126,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "746:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "746:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "736:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 129,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "761:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "736:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "736:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "782:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 134,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "792:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "782:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 135,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "799:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "782:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "782:22:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 139,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "829:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "829:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 141,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "841:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 142,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110,
                        "src": "845:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 138,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "820:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "820:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 144,
                  "nodeType": "EmitStatement",
                  "src": "815:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "869:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 114,
                  "id": 146,
                  "nodeType": "Return",
                  "src": "862:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 148,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 108,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "606:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 110,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "618:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "605:27:1"
            },
            "returnParameters": {
              "id": 114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 113,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "649:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 112,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "649:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "648:6:1"
            },
            "scope": 212,
            "src": "588:292:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 179,
              "nodeType": "Block",
              "src": "942:186:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 156,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "960:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 158,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 157,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "970:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "960:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 159,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 150,
                          "src": "979:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "960:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e742062616c616e6365",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "985:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        },
                        "value": "Insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        }
                      ],
                      "id": 155,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        230,
                        231
                      ],
                      "referencedDeclaration": 231,
                      "src": "952:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:56:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "952:56:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 164,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "1019:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 166,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "1029:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1019:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 167,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "1039:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1019:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 169,
                  "nodeType": "ExpressionStatement",
                  "src": "1019:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 170,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "1060:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 173,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 171,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "1070:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1070:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1060:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 174,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "1085:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1060:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 176,
                  "nodeType": "ExpressionStatement",
                  "src": "1060:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1117:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 154,
                  "id": 178,
                  "nodeType": "Return",
                  "src": "1110:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 180,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "distribute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 150,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "906:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "905:15:1"
            },
            "returnParameters": {
              "id": 154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 153,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "937:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 152,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "936:6:1"
            },
            "scope": 212,
            "src": "886:242:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 190,
              "nodeType": "Block",
              "src": "1187:45:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "1204:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 188,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 186,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 227,
                        "src": "1214:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1214:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1204:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 184,
                  "id": 189,
                  "nodeType": "Return",
                  "src": "1197:28:1"
                }
              ]
            },
            "documentation": null,
            "id": 191,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1154:2:1"
            },
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 183,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 191,
                  "src": "1178:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1177:9:1"
            },
            "scope": 212,
            "src": "1135:97:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 210,
              "nodeType": "Block",
              "src": "1305:130:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 199,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 227,
                            "src": "1323:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1323:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 201,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "1337:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1323:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c79206f776e657220697320616c6c6f77656420746f206765742062616c616e6365206f66206f74686572207573657273",
                        "id": 203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1343:53:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4d4115417e772233a436a8b0dddadefbb49fa5426ef06769bc4c7bf9af1058bc",
                          "typeString": "literal_string \"Only owner is allowed to get balance of other users\""
                        },
                        "value": "Only owner is allowed to get balance of other users"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4d4115417e772233a436a8b0dddadefbb49fa5426ef06769bc4c7bf9af1058bc",
                          "typeString": "literal_string \"Only owner is allowed to get balance of other users\""
                        }
                      ],
                      "id": 198,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        230,
                        231
                      ],
                      "referencedDeclaration": 231,
                      "src": "1315:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1315:82:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 205,
                  "nodeType": "ExpressionStatement",
                  "src": "1315:82:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 206,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "1415:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 208,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 207,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 193,
                      "src": "1425:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1415:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 197,
                  "id": 209,
                  "nodeType": "Return",
                  "src": "1408:20:1"
                }
              ]
            },
            "documentation": null,
            "id": 211,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBalanceOther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 193,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 211,
                  "src": "1263:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1262:12:1"
            },
            "returnParameters": {
              "id": 197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 196,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 211,
                  "src": "1296:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 195,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1296:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1295:9:1"
            },
            "scope": 212,
            "src": "1238:197:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 213,
        "src": "25:1412:1"
      }
    ],
    "src": "0:1438:1"
  },
  "legacyAST": {
    "absolutePath": "/home/thenullterminator/MoodBeats/contracts/Token.sol",
    "exportedSymbols": {
      "Token": [
        212
      ]
    },
    "id": 213,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 212,
        "linearizedBaseContracts": [
          212
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 61,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "50:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 59,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "50:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "546f6b656e",
              "id": 60,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "72:7:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_1317f51c845ce3bfb7c268e5337a825f12f3d0af9584c2bbfbf4e64e314eaf73",
                "typeString": "literal_string \"Token\""
              },
              "value": "Token"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 64,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "85:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 62,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "85:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "54",
              "id": 63,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "109:3:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_846b7b6deb1cfa110d0ea7ec6162a7123b761785528db70cceed5143183b11fc",
                "typeString": "literal_string \"T\""
              },
              "value": "T"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 67,
            "name": "standard",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "118:38:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 65,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "118:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "546f6b656e2076312e30",
              "id": 66,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "144:12:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_0cfdb60672e8de333a080fbea680c5da51002b0163dddd1a8f712d5fda5187a1",
                "typeString": "literal_string \"Token v1.0\""
              },
              "value": "Token v1.0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 69,
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "162:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "162:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 71,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "195:13:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 70,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "195:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 75,
            "name": "balanceOf",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "242:45:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 74,
              "keyType": {
                "id": 72,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "251:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "242:28:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 73,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 77,
            "name": "count",
            "nodeType": "VariableDeclaration",
            "scope": 212,
            "src": "293:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 76,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "293:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 85,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 85,
                  "src": "343:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 81,
                  "indexed": false,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 85,
                  "src": "374:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 83,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 85,
                  "src": "395:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "395:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "333:82:1"
            },
            "src": "319:97:1"
          },
          {
            "body": {
              "id": 105,
              "nodeType": "Block",
              "src": "470:112:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 90,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "480:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 227,
                        "src": "488:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 92,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "488:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "480:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 94,
                  "nodeType": "ExpressionStatement",
                  "src": "480:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "508:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 96,
                      "name": "initialSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 87,
                      "src": "522:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "508:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "508:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "545:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 101,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "555:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "545:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 102,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "564:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "545:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 104,
                  "nodeType": "ExpressionStatement",
                  "src": "545:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 106,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 87,
                  "name": "initialSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 106,
                  "src": "440:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 86,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:23:1"
            },
            "returnParameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "470:0:1"
            },
            "scope": 212,
            "src": "427:155:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "654:226:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 116,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "672:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 119,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 227,
                              "src": "682:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "682:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "672:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 120,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 110,
                          "src": "696:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "672:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e742062616c616e6365",
                        "id": 122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "702:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        },
                        "value": "Insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        }
                      ],
                      "id": 115,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        230,
                        231
                      ],
                      "referencedDeclaration": 231,
                      "src": "664:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "664:61:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 124,
                  "nodeType": "ExpressionStatement",
                  "src": "664:61:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 125,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "736:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 128,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 126,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "746:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "746:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "736:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 129,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "761:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "736:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "736:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "782:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 134,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "792:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "782:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 135,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "799:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "782:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "782:22:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 139,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "829:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "829:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 141,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "841:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 142,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110,
                        "src": "845:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 138,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "820:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "820:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 144,
                  "nodeType": "EmitStatement",
                  "src": "815:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "869:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 114,
                  "id": 146,
                  "nodeType": "Return",
                  "src": "862:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 148,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 108,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "606:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 110,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "618:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "605:27:1"
            },
            "returnParameters": {
              "id": 114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 113,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "649:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 112,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "649:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "648:6:1"
            },
            "scope": 212,
            "src": "588:292:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 179,
              "nodeType": "Block",
              "src": "942:186:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 156,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "960:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 158,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 157,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "970:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "960:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 159,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 150,
                          "src": "979:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "960:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e742062616c616e6365",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "985:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        },
                        "value": "Insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        }
                      ],
                      "id": 155,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        230,
                        231
                      ],
                      "referencedDeclaration": 231,
                      "src": "952:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:56:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "952:56:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 164,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "1019:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 166,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "1029:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1019:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 167,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "1039:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1019:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 169,
                  "nodeType": "ExpressionStatement",
                  "src": "1019:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 170,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "1060:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 173,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 171,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "1070:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1070:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1060:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 174,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "1085:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1060:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 176,
                  "nodeType": "ExpressionStatement",
                  "src": "1060:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1117:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 154,
                  "id": 178,
                  "nodeType": "Return",
                  "src": "1110:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 180,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "distribute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 150,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "906:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "905:15:1"
            },
            "returnParameters": {
              "id": 154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 153,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 180,
                  "src": "937:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 152,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "936:6:1"
            },
            "scope": 212,
            "src": "886:242:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 190,
              "nodeType": "Block",
              "src": "1187:45:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "1204:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 188,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 186,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 227,
                        "src": "1214:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1214:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1204:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 184,
                  "id": 189,
                  "nodeType": "Return",
                  "src": "1197:28:1"
                }
              ]
            },
            "documentation": null,
            "id": 191,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1154:2:1"
            },
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 183,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 191,
                  "src": "1178:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1177:9:1"
            },
            "scope": 212,
            "src": "1135:97:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 210,
              "nodeType": "Block",
              "src": "1305:130:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 199,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 227,
                            "src": "1323:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1323:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 201,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "1337:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1323:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f6e6c79206f776e657220697320616c6c6f77656420746f206765742062616c616e6365206f66206f74686572207573657273",
                        "id": 203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1343:53:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4d4115417e772233a436a8b0dddadefbb49fa5426ef06769bc4c7bf9af1058bc",
                          "typeString": "literal_string \"Only owner is allowed to get balance of other users\""
                        },
                        "value": "Only owner is allowed to get balance of other users"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4d4115417e772233a436a8b0dddadefbb49fa5426ef06769bc4c7bf9af1058bc",
                          "typeString": "literal_string \"Only owner is allowed to get balance of other users\""
                        }
                      ],
                      "id": 198,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        230,
                        231
                      ],
                      "referencedDeclaration": 231,
                      "src": "1315:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1315:82:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 205,
                  "nodeType": "ExpressionStatement",
                  "src": "1315:82:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 206,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "1415:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 208,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 207,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 193,
                      "src": "1425:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1415:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 197,
                  "id": 209,
                  "nodeType": "Return",
                  "src": "1408:20:1"
                }
              ]
            },
            "documentation": null,
            "id": 211,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBalanceOther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 193,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 211,
                  "src": "1263:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1262:12:1"
            },
            "returnParameters": {
              "id": 197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 196,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 211,
                  "src": "1296:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 195,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1296:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1295:9:1"
            },
            "scope": 212,
            "src": "1238:197:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 213,
        "src": "25:1412:1"
      }
    ],
    "src": "0:1438:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.8+commit.23d335f2.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        }
      },
      "links": {},
      "address": "0x18139097051D2880e09C28344114b7213402688E",
      "transactionHash": "0xb229098225190548226b172fdd68793feaa79ccbfbce328e278cbda306bee27f"
    },
    "15001": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        }
      },
      "links": {},
      "address": "0xa4A67B8b35dC5d018B350FBFCC5aEeCE828bDb07",
      "transactionHash": "0x58674de85842f48cdbfdc78507e4f60a55cd190e85bd7c01664b75195f596d1b"
    }
  },
  "schemaVersion": "3.0.16",
  "updatedAt": "2020-02-14T21:39:09.048Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
};
App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
  
    init: function(){
      return App.initWeb3();
    },
  
    initWeb3: function(){
        
      if (typeof web3 !== 'undefined') {
        // If a web3 instance is already provided by Meta Mask.
        
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
        
      } else {
        // Specify default instance if no web3 instance provided
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        web3 = new Web3(App.web3Provider);
      }
      return App.initContract();
    },
    
    initContract: function() {
    
      // $.getJSON("Token.json", (token)=> {
      //   // Instantiate a new truffle contract from the artifact
      //   App.contracts.Token = TruffleContract(token);
      //   // Connect provider to interact with contract
      //   App.contracts.Token.setProvider(App.web3Provider);
        
      //   App.listenForEvents();
      //   alert("S");
      //   return App.render();
      // }).catch((e)=>console.log(e));

      App.contracts.Token = TruffleContract(token);
      // Connect provider to interact with contract
      App.contracts.Token.setProvider(App.web3Provider);
      
      App.listenForEvents();

      return App.render();
      
	
    // App.contracts.Token= new web3.eth.Contract(abi,address.toString());
    // alert("unuf");
    // App.contracts.Token.setProvider(App.web3Provider);
    },
  
    listenForEvents: function() {
      App.contracts.Token.deployed().then(function(instance) {
        instance.Transfer({}, {
          fromBlock: 0,
          toBlock: 'latest'
        }).watch(function(error, event) {
          console.log("event triggered", event)
          // Reload when a new vote is recorded
          App.render();
        });
        // instance.Distribute({},{
        //   fromBlock: 0,
        //   toBlock: 'latest'
        // }).watch(function(error,event){
        //   console.log("event triggered", event);
        //   App.render();
        // });
      });
    },
  
    render: function(){
        var electionInstance;

        // Load account data
        web3.eth.getCoinbase(function(err, account) {

        if (err === null) {
            
            App.account = account;
            //TO print all available accounts in truffle console web3.eth.getAccounts().then((i)=>{console.log(i[1])})
            //$("#accountAddress").html("Your Account: " + account);
        }
        });
    },
  
    transfer: function(Toadd) {
    //   var to = $('#candidatesSelect').val();
      var val = parseInt($('#amountPay').val());
      
      if (App.contracts.Token.deployed().then(function(instance){
        var x=val;
       
        return instance.transfer(Toadd,x);
      
      })){
        
        // alert("transfer successful");
        App.getbalance();
      }
      else {
        alert("unable to transfer");
      }
      
    },

    distribute: function() {

      var val=10;
      if (App.contracts.Token.deployed().then(function(instance){

        var x=val;
        console.log(instance);
        return instance.distribute(x);
      
      }).catch((e)=>{
        alert(e);
        return false;
      })){
        
        // alert("distribute successful");
      }
      else {
        alert("unable to distribute");
      }
    },

    getbalance: function(){
      App.contracts.Token.deployed().then((instance)=>{
        instance.getBalance().then((v)=>{
          $("#Balance").text(v+"T");
        }).catch((e)=>alert(e));
      });
    }
  
  };


  $(function() {
    $(window).load(function() {
      // App.init();
    });
  });