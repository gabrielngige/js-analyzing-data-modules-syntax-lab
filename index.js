// Import datejs to handle the merge_date formatting
require('datejs');

/**
 * combineUsers
 * Merges multiple arrays of usernames and adds a merge date.
 * @param {...Array} args - An indeterminate amount of arrays containing strings.
 */
function combineUsers(...args) {
    // Step 2: Initialize the Return Object
    const combinedObject = {
        users: []
    };

    // Step 3 & 4: Loop through args and Merge Arrays using Spread Operator
    args.forEach(userArray => {
        combinedObject.users = [...combinedObject.users, ...userArray];
    });

    // Step 5: Get today's date formatted as M/d/yyyy using datejs
    // .toString() is a datejs extension that allows the specified format
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Step 7: Return the object
    return combinedObject;
}

// Export the function for Jest testing
module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};