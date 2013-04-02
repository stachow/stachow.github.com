function HomeCtrl($scope, $http) {
    $http.jsonp('https://api.github.com/users/stachow/repos?callback=JSON_CALLBACK')
    .success(function (msg) {
        var myRepos = _.chain(msg.data)
                    .filter(function (repo) { return !repo.fork && repo.name !== 'stachow.github.com' })
                    .sortBy('created_at')
                    .reverse()
                    .value();

        console.log(myRepos);
        $scope.repos = myRepos;
    });

};