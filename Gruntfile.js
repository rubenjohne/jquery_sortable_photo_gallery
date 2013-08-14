module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			files: ['sass/*.scss', 'coffee/*.coffee', 'index.html'],
			tasks: ['sass:dev', 'coffee:compile']
		},
		
		sass: {																// Task
			dev: {															// Target
				files: {													// Dictionary of files 
					'css/sortablegallery.css': 'sass/sortablegallery.scss'	// 'destination' : 'source'
				}
				
			}
		},
		
		coffee: {
		  compile: {
		    files: {
		      'js/sortablegallery.js': 'coffee/sortablegallery.coffee'  // 1:1 compile
		    }
		  } 
		}
		
	});
	
	grunt.registerTask('default', 'sass:dev', 'coffee:compile');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	
}