exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  capabilities: { // or multiCapabilities with an array of browser objects
    browserName: 'chrome'
  }
}
