Ext.define('Asas.controller.Auth', {

    extend: 'Ext.app.Controller',

    views: ['Auth'],

    refs: [{
        ref: 'authPanel',
        xtype: 'asas_auth',
        selector: 'asas_auth'
    }],

    init: function() {
        this.control({
            'asas_auth form': {
                afterrender: this.onAuthRender
            },
            'asas_auth button[action=submit]': {
                click: this.onSubmitButtonClick
            }
        });
    },

    onAuthRender: function(form) {
        Ext.create('Ext.util.KeyNav', form.getEl(), {
            scope: this,
            enter: this.onSubmitButtonClick
        });
    },

    onSubmitButtonClick: function(button) {
        var authPanel = this.getAuthPanel(),
            form = authPanel.down('form');

        form.submit({
            scope: this,
            url: '/api/admin/login',
            success: function(form, action) {
                authPanel.fireEvent('auth', action.result.user);
                authPanel.close();
            },
            failure: function() {
                authPanel.down('container[role=warning]').show();
                form.down('textfield[name=password]').reset();
                form.down('textfield[name=password]').focus();
            }
        });
    }

});
