
App = {
    web3Provider: null,
    contracts: {
      Invest: null
    },
    currentAddress: '',
    contractAddress: '0xb041B84d387C62C3c05aEC74e9c5C40840671851',
    contractAbi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BindIntroLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"GrantLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eleAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dayRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StakedLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"WithdrawLog","type":"event"},{"inputs":[],"name":"ELE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"needUsdtAmount","type":"uint256"},{"internalType":"uint256","name":"dayRate","type":"uint256"}],"name":"addStakeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"needUsdtAmount","type":"uint256"},{"internalType":"uint256","name":"dayRate","type":"uint256"}],"name":"editStakeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakeType","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"needUsdtAmount","type":"uint256"},{"internalType":"uint256","name":"dayRate","type":"uint256"}],"internalType":"struct Invest.StakeType[]","name":"stakeTypeArr","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurTime","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getEleAmount","outputs":[{"internalType":"uint256","name":"eleAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"grant","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"string[]","name":"keys","type":"string[]"}],"name":"grantBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"idoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"keyIsUsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"routerPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feeValue","type":"uint256"}],"name":"setFeeValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_routerPath","type":"address"}],"name":"setRouterPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_start","type":"bool"}],"name":"setStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"_intro","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"address","name":"intro","type":"address"},{"internalType":"uint256","name":"investAmmount","type":"uint256"},{"internalType":"uint256","name":"totalBack","type":"uint256"},{"internalType":"uint256","name":"lastTime","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}],
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
      App.contracts.Invest = new web3.eth.Contract(App.contractAbi, App.contractAddress);
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
    addStakeType:async function (){
            let addStakeType_id = $('#addStakeType_id').val()
      let addStakeType_needUsdtAmount = $('#addStakeType_needUsdtAmount').val()
      let addStakeType_dayRate = $('#addStakeType_dayRate').val()
      
            let dataInvest = await App.contracts.Invest.methods.addStakeType(addStakeType_id,addStakeType_needUsdtAmount,addStakeType_dayRate).send({from:App.currentAddress})
          },
          addWhitelist:async function (){
            let addWhitelist_account = $('#addWhitelist_account').val()
      
            let dataInvest = await App.contracts.Invest.methods.addWhitelist(addWhitelist_account).send({from:App.currentAddress})
          },
          delWhitelist:async function (){
            let delWhitelist_account = $('#delWhitelist_account').val()
      
            let dataInvest = await App.contracts.Invest.methods.delWhitelist(delWhitelist_account).send({from:App.currentAddress})
          },
          editStakeType:async function (){
            let editStakeType_id = $('#editStakeType_id').val()
      let editStakeType_needUsdtAmount = $('#editStakeType_needUsdtAmount').val()
      let editStakeType_dayRate = $('#editStakeType_dayRate').val()
      
            let dataInvest = await App.contracts.Invest.methods.editStakeType(editStakeType_id,editStakeType_needUsdtAmount,editStakeType_dayRate).send({from:App.currentAddress})
          },
          getToken:async function (){
            let getToken_amount = $('#getToken_amount').val()
            let amount = new BigNumber(getToken_amount).multipliedBy(10**18).toFixed()
      let getToken_user = $('#getToken_user').val()
           console.log(amount)
            let dataInvest = await App.contracts.Invest.methods.getToken(amount,getToken_user).send({from:App.currentAddress})
          },
          grant:async function (){
            let grant_user = $('#grant_user').val()
      let grant_amount = $('#grant_amount').val()
      let grant_key = $('#grant_key').val()
      
            let dataInvest = await App.contracts.Invest.methods.grant(grant_user,grant_amount,grant_key).send({from:App.currentAddress})
          },
          grantBatch:async function (){
            let grantBatch_users = $('#grantBatch_users').val()
      let grantBatch_amounts = $('#grantBatch_amounts').val()
      let grantBatch_keys = $('#grantBatch_keys').val()
      
            let dataInvest = await App.contracts.Invest.methods.grantBatch(grantBatch_users,grantBatch_amounts,grantBatch_keys).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let dataInvest = await App.contracts.Invest.methods.initialize().send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let dataInvest = await App.contracts.Invest.methods.renounceOwnership().send({from:App.currentAddress})
          },
          setFeeValue:async function (){
            let setFeeValue__feeValue = $('#setFeeValue__feeValue').val()
      
            let dataInvest = await App.contracts.Invest.methods.setFeeValue(setFeeValue__feeValue).send({from:App.currentAddress})
          },
          setRouterPath:async function (){
            let setRouterPath__routerPath = $('#setRouterPath__routerPath').val()
      
            let dataInvest = await App.contracts.Invest.methods.setRouterPath(setRouterPath__routerPath).send({from:App.currentAddress})
          },
          setStart:async function (){
            let setStart__start = $('#setStart__start').val()
      
            let dataInvest = await App.contracts.Invest.methods.setStart(setStart__start).send({from:App.currentAddress})
          },
          stake:async function (){
            let stake_id = $('#stake_id').val()
      let stake__intro = $('#stake__intro').val()
      
            let dataInvest = await App.contracts.Invest.methods.stake(stake_id,stake__intro).send({from:App.currentAddress})
          },
          transferOwnership:async function (){
            let transferOwnership_newOwner = $('#transferOwnership_newOwner').val()
      
            let dataInvest = await App.contracts.Invest.methods.transferOwnership(transferOwnership_newOwner).send({from:App.currentAddress})
          },
          withdraw:async function (){
            
            let ethValue = $('#ethValue').val()
            let dataInvest = await App.contracts.Invest.methods.withdraw().send({from:App.currentAddress,value: ethValue})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
