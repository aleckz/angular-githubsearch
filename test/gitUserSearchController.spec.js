describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function(){
    expect(controller.searchResult).toBeUndefined();
    expect(controller.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function(){
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://api.github.com/search/users?access_token=" + gitSecret + "&q=hello")
        .respond(
          { items: items }
        );
    }));

    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      },
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    it('displays search results', function(){
      controller.searchTerm = 'hello'
      controller.doSearch();
      httpBackend.flush();
      expect(controller.searchResult.items).toEqual(items);
    });
  });
});
