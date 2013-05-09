//Copyright 2012, etc.

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['jquery'], factory);
    } else {
        // Browser globals
        root.principium = factory(root.$);
    }
}(this, function (jquery) {


