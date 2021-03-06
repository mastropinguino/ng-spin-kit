(function (global) {
  var map = {
    'dist': 'dist',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  };
  var packages = {
    'dist': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  function packIndex (pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  function packUmd (pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
