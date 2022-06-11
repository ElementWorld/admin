
App = {
    web3Provider: null,
    contracts: {
      EleIdo: null
    },
    currentAddress: '',
    contractAddress: '0xB0286068316383AADE9665eA091d977aeb2b4F56',
    contractAbi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BindIntroLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyNftLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"IdoLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"ELE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_intro","type":"address"}],"name":"buyNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyNftAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeIdoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeNftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getChildren","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getFreeUserInfo","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"intro","type":"address"},{"internalType":"address[]","name":"children","type":"address[]"},{"internalType":"bool","name":"isGetNft","type":"bool"},{"internalType":"bool","name":"isBuyNft","type":"bool"},{"internalType":"bool","name":"isIdo","type":"bool"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_intro","type":"address"}],"name":"ido","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"idoAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"introNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ele","type":"address"}],"name":"setELE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_freeIdoAddress","type":"address"}],"name":"setFreeIdoAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxNft","type":"uint256"}],"name":"setMaxNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdt","type":"address"}],"name":"setUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"intro","type":"address"},{"internalType":"bool","name":"isGetNft","type":"bool"},{"internalType":"bool","name":"isBuyNft","type":"bool"},{"internalType":"bool","name":"isIdo","type":"bool"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"}],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        return App.initContract();
      });
    },
    initContract: function () {
      App.contracts.EleIdo = new web3.eth.Contract(App.contractAbi, App.contractAddress);
      return App.bindEvents();
    },
    bindEvents: function () {
      $(document).on('change', '#select', App.selectFunction);
    },
    selectFunction: function () {
      let index = $('#select').val()
      let functionAbi = App.contractAbi[index]
      $('#' +functionAbi.name + 'Box').show().siblings().hide()

    },
    buyNft:async function (){
            let buyNft__intro = $('#buyNft__intro').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.buyNft(buyNft__intro).send({from:App.currentAddress})
          },
          ido:async function (){
            let ido__intro = $('#ido__intro').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.ido(ido__intro).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let dataEleIdo = await App.contracts.EleIdo.methods.initialize().send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let dataEleIdo = await App.contracts.EleIdo.methods.renounceOwnership().send({from:App.currentAddress})
          },
          setAddress:async function (){
            let setAddress_account = $('#setAddress_account').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.setAddress(setAddress_account).send({from:App.currentAddress})
          },
          setELE:async function (){
            let setELE__ele = $('#setELE__ele').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.setELE(setELE__ele).send({from:App.currentAddress})
          },
          setFreeIdoAddress:async function (){
            let setFreeIdoAddress__freeIdoAddress = $('#setFreeIdoAddress__freeIdoAddress').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.setFreeIdoAddress(setFreeIdoAddress__freeIdoAddress).send({from:App.currentAddress})
          },
          setMaxNft:async function (){
            let setMaxNft__maxNft = $('#setMaxNft__maxNft').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.setMaxNft(setMaxNft__maxNft).send({from:App.currentAddress})
          },
          setUsdt:async function (){
            let setUsdt__usdt = $('#setUsdt__usdt').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.setUsdt(setUsdt__usdt).send({from:App.currentAddress})
          },
          transferOwnership:async function (){
            let transferOwnership_newOwner = $('#transferOwnership_newOwner').val()
      
            let dataEleIdo = await App.contracts.EleIdo.methods.transferOwnership(transferOwnership_newOwner).send({from:App.currentAddress})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
