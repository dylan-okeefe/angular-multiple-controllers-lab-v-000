function ContactController() {
  var vm = this;

  vm.name = 'paul';
  vm.email = 'paul@paul.com';
  vm.phone = '2125555555';

  this.changeName = function () {
    vm.name = 'Something Else!';
  }
}

angular
        .module('app')
        .controller('ContactController', ContactController);