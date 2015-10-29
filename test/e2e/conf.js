exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['serketSauceFeature.js'],
  mocks: {
    default: [],
    dir: 'mocks'
  },
  onPrepare: function(){
    require('protractor-http-mock').config = {
      rootDirectory: __dirname,
      protractorConfig: 'conf.js'
    };
  }
}
