var adiff = require('adiff')();

exports.diff = function(reference, input) {
  var result = adiff.diff(reference, input);
  var actions = [];
  result.forEach(function(action) {
    var i;
    var index = action[0];
    var deleted = action[1];
    if (deleted > 0) {
      for (i = deleted - 1; i >= 0; --i) {
        actions.push({
          type: 'del',
          line: index + i
        });
      }
    }
    var additions = action.slice(2);
    for (i = 0; i < additions.length; ++i) {
      actions.push({
        type: 'add',
        line: index + i,
        text: additions[i]
      });
    }
  });
  return actions;
};
