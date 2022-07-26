const hasValid = (sharedTestName, args) => {
    require(`./${sharedTestName}`)(args);
};

exports.hasValid = hasValid;
