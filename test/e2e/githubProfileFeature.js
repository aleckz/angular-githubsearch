describe('Github Profile finder', function(){

  var searchBox = element(by.model('searchController.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function(){
    browser.get('http://localhost:8080');
  })

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Github User Search')
  });

  // it('finds profiles', function(){
  //   searchBox.sendKeys('tansaku')
  //   searchBtn.click();
  //   expect(element(by.binding('user.login')).getText()).toEqual('tansaku');
  // });

  it('finds profiles', function(){
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchController.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spike01')
  });

  it('finds the last user', function(){
    searchBox.sendKeys('tansaku');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchController.searchResult.items'));
    expect(profiles.last().getText()).toEqual('tansaku');
  })
});
