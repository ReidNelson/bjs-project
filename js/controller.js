angular.module('myApp', []).controller('controller', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.fileName = 'CTIAShortCodeMonitoringHandbook.pdf';

    $scope.reports = [
      {name:'Report 1',page:'3',status:'btn-success'},
      {name:'Report 2',page:'11',status:'btn-warning'},
      {name:'Report 3',page:'15',status:'btn-danger'},
      {name:'Report 4',page:'17',status:'btn-primary'}
    ];
});
