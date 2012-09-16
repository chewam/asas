Ext.define("Asas.utils.Config", {

    singleton: true,

    extend: 'Object',

    config: {
        user: null,
        api: {
            login: '/api/login',
            register: '/api/register',
            teams: '/api/teams'
        }
    },

    constructor: function(config) {
        this.initConfig(config);
    }

});
