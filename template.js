/*
 * grunt-init-bb-require-mobile
 * http://dkanderson.com
 *
 * Copyright (c) 2014 Duane K. Anderson
 * Licensed under the MIT license.
 */

'use strict';

//description
exports.description = "A template to set up a mobile project that is based on backbone/requirejs/almond/marionnette/handlebars/jquery/modernizr/sass";

exports.template = function (grunt, init, done) {
    init.process({}, [
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('licenses'),
        init.prompt('author_name'),
        init.prompt('author_email')
    ], function (err, props) {

        props.keywords = [];

        props.dependencies = {
            'almond': 'latest'
        };

        props.devDependencies = {
            'grunt': 'latest',
            'grunt-contrib-jshint': '~0.6.4',
            'grunt-contrib-watch': '~0.5.3',
            'grunt-contrib-uglify': 'latest',
            'grunt-contrib-requirejs': 'latest',
            'grunt-contrib-sass': 'latest',
            'grunt-contrib-cssmin': 'latest',
            'grunt-processhtml': 'latest',
            'grunt-autoprefixer': '~1.0.0',
            'grunt-modernizr': 'latest',
            'load-grunt-tasks': '~0.6.0',
            'time-grunt': '~0.4.0'
        };

        var files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file.
        init.writePackageJSON('package.json', props);

        // All done!
        done();

    });
};