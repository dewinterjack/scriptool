// require
var menu = require('./produce/menu.js')
var term = require('terminal-kit').terminal;

var items = [ 'File' , 'Edit' , 'View' , 'Scrips' , 'Help', 'Exit' ] ;
var title = ['scriptool', 'Manage scripts easily']

menu.produce(items, title);


// Clearing console for development.
term.clear() ;

// App


term.singleLineMenu( items , options , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(menu.select(response.selectedText));
	process.exit() ;
} ) ;
