Ext.define("Asas.utils.Config", {

    singleton: true,

    extend: 'Object',

    config: {
        user: null,
        api: {
            login: '/api/login',
            logout: '/api/logout',
            register: '/api/register',
            teams: '/api/teams'
        }
    },

    constructor: function(config) {
        config = Ext.apply(config || {}, {
            user: _USER_
        });
        this.initConfig(config);
    }

});
