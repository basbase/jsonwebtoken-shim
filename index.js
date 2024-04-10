//import { Algorithm, decode, sign, verify } from 'jsonwebtoken';
import {KJUR} from 'jsrsasign';

exports.Algorithm= {};
exports.decode= function(value) {
    console.debug('SEBUG decode');
    return value ? KJUR.jws.JWS.parse(value) : {};
};
exports.sign= function() {
    console.debug('SEBUG sign');
};
exports.verify= function(value, key) {
    console.debug('SEBUG verify');
    return KJUR.jws.JWS.verify(value, key)
};

module.exports = exports;
