// require
var menu = require('./menu.js')
var term = require('terminal-kit').terminal;



var items = [ 'File' , 'Edit' , 'View' , 'Scrips' , 'Help', 'Exit' ] ;


var options = {
	y: 2,
	style: term.inverse ,
	selectedStyle: term.dim.blue.bgGreen
} ;

// Clearing console for development.
term.clear() ;

// App
term.yellow.bold.underline('scriptool | Manage scripts easily.\n\n');

term.singleLineMenu( items , options , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(menu.select(response.selectedText));
	process.exit() ;
} ) ;
