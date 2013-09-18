module.exports = function(grunt) {
    var done = this.async(),
        commands;

    commands = {
        removeDirectory: 'rm -rf coverage',
        startServer: 'java -jar JSCover-all.jar -ws --document-root=./ --report-dir=coverage --port=9873 --no-instrument=app/bower_components --no-instrument=test --no-instrument=/src/js/app/shared/mocks.js',
        phantomCoverage: 'run-jscover-qunit.js http://localhost:9873/test/index.html'
    };
    
    grunt.log.write('Deleting the coverage directory...\n');

    // Delete the coverage directory
    exec(commands.removeDirectory);

    grunt.log.write('Starting the server...\n');

    // Start the JSCoverage server
    exec(commands.startServer);

    setTimeout(function () {
        grunt.log.write('Running phantomJS...\n');

        // Run the phantomJS process to test coverage
        exec(commands.phantomCoverage, {
            maxBuffer: 500000 * 1024
        }, function(error, stdout, stderr) {
            if (error) {
                grunt.log.write('Error: ' + error);
                grunt.log.write(stderr);
                grunt.log.write(stdout);
            }
            done();             
        });
    }, 5000);
};