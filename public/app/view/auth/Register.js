Ext.define("Asas.view.auth.Register", {

    extend: 'Ext.form.Panel',

    xtype: 'asas_auth_register',

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
            }, {
                name: 'email',
                label: 'email',
                xtype: 'textfield'
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'button',
                text: 'register',
                action: 'register'
            }, {
                xtype: 'button',
                text: 'show login',
                action: 'showlogin'
            }]
        }]
    }

});
