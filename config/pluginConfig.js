/*
   gulp 插件的配置文件
*/

// gulp-htmlmin
exports.htmlmin = {
   removeComments: true,
   collapseWhitespace: true,
   removeScriptTypeAttributes: true,
   removeStyleLinkTypeAttributes: true,
   minifyJS: true,
   minifyCSS: true
};

exports.autofx = {
   browsers: [
      'ie >= 8',
      'ie_mob >= 8',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
   ],
   cascade: true,
   remove: true
};

exports.cleanCSS = {
   compatibility: 'ie8',
   keepSpecialComments: '*'
};

exports.uglify = {
   mangle: {
      // except: ['require', 'exports', 'module', '$']
      reserved: ['require', 'exports', 'module', '$']
   }
};
