function HomeCtrl($scope, $http) {
    $http.jsonp('https://api.github.com/users/stachow/repos?callback=JSON_CALLBACK')
    .success(function (msg) {
        var myRepos =  _.chain(msg.data)
                        .filter(function (item) { return !item.fork && item.name !== 'stachow.github.com' })
                        .sortBy(function (item) { return (item.name.indexOf('grav') !== -1 ? '0000-00-00' : item.created_at) })
                        .reverse()
                        .value();
        $scope.repos = myRepos;
    });

};