module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            all: ['dist/']
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            allProduction: {
                src: [
                    'css/main.css',
                    'css/icon-tjdft.css'
                ],
                dest: 'dist/css/main.min.css'
            }
        },
        copy: {
            fonts: {
                expand: true,
                cwd: 'fonts/',
                src: '**',
                dest: 'dist/fonts/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('prod', ['clean', 'cssmin', 'copy']);
}