Ext.define('Asas.view.Auth', {

    extend: 'Ext.window.Window',

    alias: 'widget.asas_auth',

    initComponent: function() {

        Ext.apply(this, {
            modal: true,
            closable: false,
            resizable: false,
            constrainHeader: true,
            title: 'Authentification',
            items: [{
                border: false,
                xtype: 'form',
                bodyPadding: 10,
                items: [{
                    labelWidth: 80,
                    fieldLabel: 'Email',
                    xtype: 'textfield',
                    name: 'email',
                    listeners: {
                        afterrender: function() {
                            Ext.defer(this.focus, 800, this);
                        }
                    }
                }, {
                    labelWidth: 80,
                    fieldLabel: 'Mot de passe',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'password'
                }]
            }],
            buttons: [{
                hidden: true,
                role: 'warning',
                xtype: 'container',
                html: '<span style="color: darkred">identifiants incorrects !</span>'
            }, {
                flex: 1,
                xtype: 'tbspacer'
            }, {
                text: 'OK',
                action: 'submit'
            }]
        });

        this.callParent(arguments);
    }

});
