exports.config = 
  conventions:
    vendor: /^bower_components/
  files:
    javascripts:
      joinTo:
        'javascript/app.js': /^app/
        'javascript/vendor.js': /^(bower_components|vendor)/
    stylesheets:
      defaultExtension: 'scss'
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^bower_components/