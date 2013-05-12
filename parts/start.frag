//Copyright 2012, etc.

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define([<%= _.map(dependencies, function(name) { return "'"+name+"'" }).join(',') %>], factory);
    } else {
        // Browser globals
        root.<%= name %> = factory(root.$);
    }
}(this, function (jquery) {


