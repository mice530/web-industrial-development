/**
 * @author amoschen
 * @fileoverview
 * Entrance of grunt tasks
 * Usually grunt configuration and initialization
 *
 * Grunt任务的入口文件
 * 通常这里会做任务配置和初始化
 */
module.exports = function(grunt){
    // Project configuration
    // 项目配置
    grunt.initConfig({
        // Read project package.json for basic infomation
        // 读取项目的package.json文件获取基本信息
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'src/basic/*.js',
                dest: 'dest/basic/*.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    // 把提供uglify任务的插件加载进来
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register a customized task, multiple sub-task can be assigned
    // 注册定制化的任务，可以指定多个子任务
    grunt.registerTask('basic', ['uglify']);
};