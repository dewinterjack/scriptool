function startMenu(){

  return menu;
}

/**
  * Creates a menu
  * @param {array} items - Menu items
  * @param {array} title - Title, split into sections.
  * title is to be created with each section divided by a | pipe.
*/

function createMenu(items, title) {
  
  term.yellow.bold.underline('scriptool | Manage scripts easily.\n\n');
  var options = {
  	y: 2,
  	style: term.inverse ,
  	selectedStyle: term.dim.blue.bgGreen
  };
  console.log(items);
  return startMenu(menu);

  //       in:   menuitems
  //  process:   menuitems       --->   menu
  //      out:   startMenu(menu)
  //startMenu();
}

module.exports = {
  select: function(selection){
    var options = {
      'File' : function(){
        return "File called.\n";
      },
      'Edit' : function(){
        return "Edit called.\n";
      },
      'View' : function(){
        return "View called.\n";
      },
      'Tools' : function(){
        return "Scrips called.\n";
      },
      'Help' : function(){
        return "Help called.\n";
      },
      'Exit' : function(){
        process.exit();
      }
    };
    return options[selection]();
  },
  produce: clientMenu(menu_items)
};
