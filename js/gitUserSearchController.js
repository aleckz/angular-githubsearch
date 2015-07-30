githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource){
  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function(){
    self.searchResult = searchResource.get(
      { q: self.searchTerm  }
    )};
}]);


// 45cfd896bfb7c1dd9fe08002df24e4800cb06c89
