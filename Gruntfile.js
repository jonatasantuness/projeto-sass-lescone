module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: 'css/scss/*.scss',
                tasks: ['sass']
            }
        },

        sass: {                              
            dist: {                            
                options: {    
                    // style: 'compressed'                   
                    style: 'expanded'
                },
                files: {                         
                    'css/style.css':'css/scss/style.scss'
                }
            }
        }

    });
  
    // Carregando os plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    // Tarefa Default
    grunt.registerTask('default', ['sass', 'watch']);
  
  };