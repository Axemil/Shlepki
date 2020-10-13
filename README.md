# Gulp & Bower Start KIT

This is a starting from scratch template for your project in Dowell company.

## QUICK START

Clone repository to your local machine

      git clone git@git.dowell.com.ua:shared/gulp-template.git

Install packages:

      npm install


Go to package.json file and change ProjectName.

Go to bower.json file and change ProjectName and "author <mail@mail.com>" string.

All your source files located in assets directory by default.

Run to build application:

      gulp

You can see 'build/' directory in the root of your project.

Open **index.html** file to make sure everything is alright

Enjoy!


## COMMANDS

All build commands:
      gulp html:build
      gulp styles:build
      gulp js:build
      gulp fonts:build
      gulp img:build

Run all above functions:

      gulp build

Run  livereload server:

      gulp lr:listen

Remove generated folder with files inside:

      gulp clean

Generate favicon files for various devises from source file **assets/img/favicon.svg**

      gulp generate-favicon

Remove all favicon generated files

      gulp clean-favicon

The same as the build command but delete generated folder at first:

      gulp refresh

Watch changes in assets and build application:

      gulp watch

Main function which builds and watches all your assets. In most you need only this function:

      gulp


### NOTICE

* If you want to use html instead/with slim, just create **html** folder inside your assets.
* Use **@** as first symbol in js/coffee and css/sass/scss files for choosing only files you want to be compiled.
* Use **@** for mark your custom font folder.


**Check out [GitHub repo](https://github.com/skabrock/easy-gulp-template "simple-gulp-template") for getting fresh version**

Designed in [Dowell](http://dowell.com.ua).
