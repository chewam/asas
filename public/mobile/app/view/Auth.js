Ext.define("Asas.view.Auth", {

    extend: 'Ext.Container',

    xtype: 'asas_auth',

    requires: [
        'Asas.view.auth.Login',
        'Asas.view.auth.Register'
    ],

    config: {
        layout: 'card',
        items:[{
            xtype: 'asas_auth_login'
        }, {
            xtype: 'asas_auth_register'
        }]
    }

});
