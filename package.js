Package.describe({
  summary: "Default theme for the mobile-friendly, responsive, and lightweight jQuery date & time input picker.",
  version: "3.5.6",
  // Optional.  Default is package directory name.
  name: "plusmore:pickadate-default-theme",
  // Optional github URL to your source repository.
  git: "https://github.com/PlusMore/meteor-pickadate-default-theme.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0', 'METEOR@1.1']);
  api.use('jquery', 'client');
  api.add_files([
    'js/picker.js',
    'js/picker.date.js',
    'js/picker.time.js',
    'js/legacy.js',
    'css/default.css',
    'css/default.date.css',
    'css/default.time.css',
  ], 'client');
})
