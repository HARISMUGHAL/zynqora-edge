const { xss } = require('xss');
const xssInstance = require('xss');

/**
 * Express 5 Compatible NoSQL & XSS Sanitizer
 * Recursively removes $ and . from keys (NoSQL) and sanitizes values (XSS).
 */
const sanitize = (obj) => {
    if (typeof obj === 'string') {
        return xssInstance(obj);
    }
    
    if (obj instanceof Object) {
        for (const key in obj) {
            // NoSQL key check
            if (key.startsWith('$') || key.includes('.')) {
                delete obj[key];
            } else {
                // Recursive value check
                obj[key] = sanitize(obj[key]);
            }
        }
    }
    return obj;
};

const combinedSanitizer = (req, res, next) => {
    if (req.body) sanitize(req.body);
    if (req.params) sanitize(req.params);
    
    // For Express 5, req.query is a getter. Sanitizing in-place.
    if (req.query) {
        for (const key in req.query) {
            if (key.startsWith('$') || key.includes('.')) {
                delete req.query[key];
            } else {
                req.query[key] = sanitize(req.query[key]);
            }
        }
    }
    
    next();
};

module.exports = combinedSanitizer;
