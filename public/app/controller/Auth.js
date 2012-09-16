Ext.define('Asas.controller.Auth', {

    extend: 'Ext.app.Controller',

    config: {

        views: ['Auth'],

        refs: {
            authPanel: 'asas_auth',
            loginPanel: 'asas_auth_login',
            registerPanel: 'asas_auth_register'
        },

        control: {
            'asas_auth button[action=login]': {
                tap: 'onLoginButtonTap'
            },
            'asas_auth button[action=register]': {
                tap: 'onRegisterButtonTap'
            },
            'asas_auth button[action=showlogin]': {
                tap: 'onShowLoginButtonTap'
            },
            'asas_auth button[action=showregister]': {
                tap: 'onShowRegisterButtonTap'
            }
        }

    },

    init: function() {
        console.log('init auth');
    },

    launch: function() {
        console.log('launch auth');
        Ext.Viewport.add(Ext.create('Asas.view.Auth'));
    },

    onLoginButtonTap: function() {
        this.login();
    },

    onRegisterButtonTap: function() {
        this.register();
    },

    onShowLoginButtonTap: function() {
        this.showLogin();
    },

    onShowRegisterButtonTap: function() {
        this.showRegister();
    },

    /**********/

    showLogin: function() {
        this.getAuthPanel().setActiveItem(0);
    },

    showRegister: function() {
        this.getAuthPanel().setActiveItem(1);
    },

    login: function() {
        Ext.Ajax.request({
            scope: this,
            url: Asas.utils.Config.getApi().login,
            params: this.getLoginPanel().getValues(),
            success: function(response) {
                var data = Ext.decode(response.responseText);

                if (data.success) {
                    Asas.utils.Config.setUser(data.user);
                    this.getApplication().fireEvent('auth');
                }
            }
        });
    },

    register: function() {
        Ext.Ajax.request({
            scope: this,
            // url: '/api/register',
            url: Asas.utils.Config.getApi().register,
            params: this.getRegisterPanel().getValues(),
            success: function(response) {
                var data = Ext.decode(response.responseText);

                if (data.success) {
                    Asas.utils.Config.setUser(data.user);
                    this.getApplication().fireEvent('auth');
                }
            }
        });
    }

});
