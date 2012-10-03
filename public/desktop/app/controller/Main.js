Ext.define('Asas.controller.Main', {

    extend: 'Ext.app.Controller',

    views: ['Main', 'Auth'],

    refs: [{
        ref: 'mainPanel',
        autoCreate: true,
        xtype: 'asas',
        selector: 'asas'
    }, {
        ref: 'authPanel',
        autoCreate: true,
        xtype: 'asas_auth',
        selector: 'asas_auth'
    }],

    requires: ['Ext.window.MessageBox'],

    init: function() {
        this.control({
            'asas_auth': {
                auth: this.onAuth,
                logout: this.onLogout
            },
            'asas button[action=logout]': {
                click: this.onLogoutButtonClick
            }
        });
        Ext.Ajax.on({
            scope: this,
            requestexception: this.onRequestException
        });
        this.render();
    },

    render: function() {
        var mainPanel = this.getMainPanel();

        mainPanel.render('asas');
        Ext.Msg.render(mainPanel.down('grid').getEl());
        this.loadData();
    },

    loadData: function() {
        var teamsStore = Ext.getStore('Teams'),
            usersStore = Ext.getStore('Users'),
            eventsStore = Ext.getStore('Events');

        teamsStore.load({
            scope: this,
            callback: function(records, operation, success) {
                if (success) {
                    this.afterAuth();
                    usersStore.load();
                    eventsStore.load();
                }
            }
        });
    },

    showAuth: function() {
        var authPanel = this.getAuthPanel(),
            mainPanel = this.getMainPanel(),
            el = mainPanel.down('tabpanel').getEl();

        authPanel.render(el);
        authPanel.show(el);
    },

    logout: function() {
        var mainPanel = this.getMainPanel(),
            teamsStore = Ext.getStore('Teams'),
            usersStore = Ext.getStore('Users'),
            eventsStore = Ext.getStore('Events');

        teamsStore.removeAll();
        usersStore.removeAll();
        eventsStore.removeAll();
        this.showAuth();

        mainPanel.down('container[role=info]').hide();
        mainPanel.down('button[action=logout]').hide();
    },

    setUser: function(user) {
        Asas.util.Config.setUser(user);
    },

    /**********/

    onAuth: function(user) {
        this.setUser(user);
        this.loadData();
    },

    afterAuth: function() {
        var mainPanel = this.getMainPanel(),
            email = Asas.util.Config.getUser().email;

        mainPanel.down('container[role=info]').show().update(email);
        mainPanel.down('button[action=logout]').show();
    },

    onLogoutButtonClick: function(button) {
        Ext.Ajax.request({
            scope: this,
            url: '/api/logout',
            success: function() {
                this.logout();
            }
        });
    },

    onRequestException: function(conn, response, options, eOpts) {
        this.showAuth();
    }

});
