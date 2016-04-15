function StaffController() {
  var vm = this;

  vm.name = 'dylan';
  vm.email = 'dylan@dylan.com';
  vm.phone = '4135555555';

}

angular
        .module('app')
        .controller('StaffController', StaffController);