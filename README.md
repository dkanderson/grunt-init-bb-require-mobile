# grunt-init-bb-require-mobile

> Create a require js project optimized for mobile.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/dkanderson/grunt-init-bb-require-mobile.git ~/.grunt-init/bb-require-mobile
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init bb-require-mobile
```

After your template is installed in your project folder successfully, run this command to install grunt and bower dev dependencies

```
sudo npm install --unsafe-perm
```

if --unsafe-perm scares you just run 

```
npm install
```

followed by

```
bower install
```

## Gruntfile

The gruntfile is set up to run your entire build and development tasks giving you the freedom to just code. There are two main tasks in the grunt file.

```
grunt dev
```

- runs jhint
- compiles sass
- runs auto prefixer

```
grunt build
```

- runs jshint
- compiles requirejs with almond and outputs single js file to build folder
- comopiles sass
- minimize sass css output and put minified css in build folder
- runs autoprefixer
- runs modernizr and output optimized version to build folder
- process html (combine css references into one ref to minimized css file, change script reference, modernizr reference) and copy to build folder

All Done! Happy Coding :)
_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
