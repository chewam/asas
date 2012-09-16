Ext.define("Asas.utils.User", {

    singleton: true,

    extend: 'Object',

    config: {
        name: null,
        admin: false
    },

    constructor: function(config) {
        this.initConfig(config);
    }

});
