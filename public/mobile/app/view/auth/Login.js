Ext.define("Asas.view.auth.Login", {

    extend: 'Ext.form.Panel',

    xtype: 'asas_auth_login',

    config: {
        items: [{
            xtype: 'fieldset',
            items:[{
                name: 'name',
                label: 'name',
                xtype: 'textfield'
            }, {
                name: 'password',
                label: 'password',
                xtype: 'textfield'
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'button',
                text: 'login',
                action: 'login'
            }, {
                xtype: 'button',
                text: 'show register',
                action: 'showregister'
            }]
        }]
    }

});
