Ext.define('Asas.util.Config', {

    singleton: true,

    config: {
        user: _USER_
    },

    init: function(config) {
        this.initConfig(config);
    }

});
