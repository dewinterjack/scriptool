function startMenu(){
  return "Hello";
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
  view: clientMenu
};
