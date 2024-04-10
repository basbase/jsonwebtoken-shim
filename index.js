//import { Algorithm, decode, sign, verify } from 'jsonwebtoken';
import {KJUR} from 'jsrsasign';

exports.Algorithm= {};
exports.decode= function() {};
exports.sign= function() {};
exports.verify= function(value, key) {
    return KJUR.jws.JWS.verify(value, key)
};

module.exports = exports;
