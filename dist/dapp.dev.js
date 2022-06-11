"use strict";

App = {
  web3Provider: null,
  contracts: {
    PotatoFarm: null
  },
  currentAddress: '',
  contractAddress: '0x9D72096822a73c9036a44735C766151340c9664b',
  contractAbi: [{
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "amounts",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "usdtPrice",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "time",
      "type": "uint256"
    }],
    "name": "AddComboLog",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "string",
      "name": "name",
      "type": "string"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "time",
      "type": "uint256"
    }],
    "name": "AddFarmTypeLog",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "intro",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "time",
      "type": "uint256"
    }],
    "name": "AddUserLog",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }],
    "name": "ApprovalForAll",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "intro",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "amounts",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "usdtPrice",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "time",
      "type": "uint256"
    }],
    "name": "BuyComboLog",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "intro",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "amounts",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "usdtPrice",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "time",
      "type": "uint256"
    }],
    "name": "OpenBindBoxLog",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "values",
      "type": "uint256[]"
    }],
    "name": "TransferBatch",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }],
    "name": "TransferSingle",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "string",
      "name": "value",
      "type": "string"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "name": "URI",
    "type": "event"
  }, {
    "inputs": [],
    "name": "USDT",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }, {
      "internalType": "uint256[]",
      "name": "_ids",
      "type": "uint256[]"
    }, {
      "internalType": "uint256[]",
      "name": "_amounts",
      "type": "uint256[]"
    }, {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "_usdtPrice",
      "type": "uint256"
    }],
    "name": "addCombo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }, {
      "internalType": "string",
      "name": "_name",
      "type": "string"
    }],
    "name": "addFarmType",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "name": "balanceOf",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address[]",
      "name": "accounts",
      "type": "address[]"
    }, {
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }],
    "name": "balanceOfBatch",
    "outputs": [{
      "internalType": "uint256[]",
      "name": "",
      "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "_intro",
      "type": "address"
    }],
    "name": "buyCombo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getAllCombo",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }, {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }, {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }, {
        "internalType": "uint256",
        "name": "usdtPrice",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }],
      "internalType": "struct PotatoFarm.Combo[]",
      "name": "comboArr",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getAllFarmType",
    "outputs": [{
      "components": [{
        "internalType": "string",
        "name": "name",
        "type": "string"
      }, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }],
      "internalType": "struct PotatoFarm.FarmType[]",
      "name": "farmTypeArr",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }],
    "name": "getCombo",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }, {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }, {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }, {
        "internalType": "uint256",
        "name": "usdtPrice",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }],
      "internalType": "struct PotatoFarm.Combo",
      "name": "combo",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }],
    "name": "getFarmType",
    "outputs": [{
      "components": [{
        "internalType": "string",
        "name": "name",
        "type": "string"
      }, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }],
      "internalType": "struct PotatoFarm.FarmType",
      "name": "farmType",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "hashId",
      "type": "uint256"
    }],
    "name": "getSig",
    "outputs": [{
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "name": "intro",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }, {
      "internalType": "uint256[]",
      "name": "amounts",
      "type": "uint256[]"
    }],
    "name": "mintBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "mintBear",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "mintDog",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "mintFox",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "mintGun",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_intro",
      "type": "address"
    }],
    "name": "openBindBox",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "openBindUsdt",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "rootAddress",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }, {
      "internalType": "uint256[]",
      "name": "amounts",
      "type": "uint256[]"
    }, {
      "internalType": "bytes",
      "name": "data",
      "type": "bytes"
    }],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {
      "internalType": "bytes",
      "name": "data",
      "type": "bytes"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256[]",
      "name": "ids",
      "type": "uint256[]"
    }],
    "name": "setBindIds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_price",
      "type": "uint256"
    }],
    "name": "setOpenBindUsdt",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_receiveAddress",
      "type": "address"
    }],
    "name": "setReceiveAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_sig",
      "type": "uint256"
    }],
    "name": "setSig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "string",
      "name": "newuri",
      "type": "string"
    }],
    "name": "setURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "uri",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }],
  initWeb3: function initWeb3() {
    return regeneratorRuntime.async(function initWeb3$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!window.ethereum) {
              _context.next = 12;
              break;
            }

            App.web3Provider = window.ethereum;
            web3 = new Web3(App.web3Provider);
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(ethereum.enable());

          case 6:
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);

          case 10:
            _context.next = 13;
            break;

          case 12:
            if (window.web3) {
              App.web3Provider = web3.currentProvider;
              web3 = new Web3(App.web3Provider);
            } else {
              App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
              web3 = new Web3(App.web3Provider);
            }

          case 13:
            web3.eth.getAccounts(function (err, accounts) {
              if (err) {
                return;
              }

              App.currentAddress = accounts[0];
              return App.initContract();
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 8]]);
  },
  initContract: function initContract() {
    App.contracts.PotatoFarm = new web3.eth.Contract(App.contractAbi, App.contractAddress);
    return App.bindEvents();
  },
  bindEvents: function bindEvents() {
    $(document).on('change', '#select', App.selectFunction);
  },
  selectFunction: function selectFunction() {
    var index = $('#select').val();
    var functionAbi = App.contractAbi[index];
    $('#' + functionAbi.name + 'Box').show().siblings().hide();
  },
  mintBear: function mintBear() {
    var account, amount, dataPotatoFarm;
    return regeneratorRuntime.async(function mintBear$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            account = $('#account').val();
            amount = $('#amount').val();
            console.log(account, amount);
            _context2.next = 5;
            return regeneratorRuntime.awrap(App.contracts.PotatoFarm.methods.mintBear(account, amount).send({
              from: App.currentAddress
            }));

          case 5:
            dataPotatoFarm = _context2.sent;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};

(function () {
  App.initWeb3();
})();