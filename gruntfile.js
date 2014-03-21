module.exports = function(grunt) {
	
	grunt.initConfig({
		dust : {
			options : {
				wrapper : false,
				basePath : 'views/'
			},
			tmpl : {
				files: [
				    {
				    	expand: true,
			        	cwd: "views/",
			        	src: ["*.dust"],
			        	dest: "templates/",
			     		ext: ".js"
				    }
			    ]
			}
		}
	});

	grunt.loadNpmTasks("grunt-dust");

	grunt.registerTask("compileTemplates", ["dust:tmpl"]);

}