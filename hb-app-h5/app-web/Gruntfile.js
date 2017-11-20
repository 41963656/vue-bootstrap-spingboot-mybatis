module.exports = function (grunt) {
    var time_stamp = new Date().getTime();

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            all: ["target"],
            temp: ["target/temp"]
        },
        copy: {
            temp: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: ["*.html", "**/*.html"],
                    dest: "target/temp"
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: "src/images",
                    src: "*.*",
                    dest: "target/images"
                }]
            },
            bower: {
                files: [{
                    expand: true,
                    cwd: "src/bower_components",
                    src: ["**/*"],
                    dest: "target/bower_components"
                }]
            }
        },
        uglify: {
            js: {
                files: [{
                    expand: true,
                    cwd: "src/js",
                    src: ["**/*.js", "*.js"],
                    dest: "target/js"
                }]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                removeCommentsFromCDATA: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                //removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true
            },
            html: {
                files: [{
                    expand: true,
                    cwd: 'target/temp',
                    src: ["*.html", "views/*.html"],
                    dest: "target"
                }]
            }
        },
        cssmin: {
            prod: {
                files: [{
                    expand: true,
                    cwd: "src/css",
                    src: ["*.css"],
                    dest: "target/css"
                }]
            }
        },
        bower: {
            install: {
                options: {
                    "targetDir": "./target/bower_components",
                    "install": true,
                }
            }
        },
        replace: {
            index: {
                src: ["target/temp/*.html", "target/temp/views/*.html"],
                overwrite: true,
                replacements: [{
                    from: /(data-main=").+(\.js")/,
                    to: function (a, b) {
                        var last = a.lastIndexOf('"');
                        var head = a.substring(0, last) + "?_t=" + time_stamp + "\"";
                        return head;
                    }
                }]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-cachebuster');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-bower-task");
    //grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask('default', ["clean", "copy", "cssmin", 'uglify', "replace", "htmlmin", "clean:temp"]);

}