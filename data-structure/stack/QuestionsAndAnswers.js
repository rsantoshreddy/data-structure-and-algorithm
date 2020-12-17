// DESIGN A PARENTHESIS VALIDATION CHECKER USING A STACK

function parenthesisValidator(parenthesisString) {
  const parenthesis = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];
  for (let index = 0; index < parenthesisString.length; index++) {
    if (parenthesis[parenthesisString[index]]) {
      stack.push(parenthesisString[index]);
    } else {
      if (parenthesis[stack.pop()] !== parenthesisString[index]) {
        return false;
      }
    }
  }

  return !stack.length;
}
