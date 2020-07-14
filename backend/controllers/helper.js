const buildParams = (validParams, body) => {
    let params = {};

    validParams.forEach(attr => {
        if (Object.prototype.hasOwnProperty.call(body, attr) && body[attr] !== '')
            params[attr] = body[attr]
    });

    return params
}

module.exports = {
    buildParams
};