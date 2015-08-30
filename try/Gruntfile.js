'use strict';

import path from 'path';

export default grunt => {
    let clean = {
        test: [
            path.resolve('cache')
        ]
    };

    grunt.initConfig({ clean });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('test', ['clean']);
    grunt.registerTask('default', ['test']);
};
