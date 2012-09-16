Ext.define('Asas.controller.Main', {

    extend: 'Ext.app.Controller',

    config: {

        views: ['Main'],

        refs: {
            mainPanel: {
                autoCreate: true,
                xtype: 'asas_main',
                selector: 'viewport > asas_main'
            }
        },

        control: {
            'asas_topbar button[action=options]': {
                tap: 'onOptionsButtonTap'
            }
        }

    },

    init: function() {
        console.log('init main');
        this.getApplication().on({
            scope: this,
            auth: this.onAuth
        });
    },

    launch: function() {
        console.log('launch main');
    },

    onAuth: function() {
        console.log('onAuth');
        Ext.Viewport.add(this.getMainPanel());
        Ext.Viewport.setActiveItem(1);
        this.loadTeams();
    },

    onOptionsButtonTap: function(button) {
        this.showOptions(button);
    },

    /**********/

    loadTeams: function() {
        Ext.getStore('teams').load(function(teams) {
            this.renderTeams(teams);
        }, this);
    },

    renderTeams: function(teams) {
        console.log('renderTeams', arguments);
        var data,
            items = [],
            tabPanel = Ext.Viewport.down('tabpanel');

        for (var i = 0, l = teams.length; i < l; i++) {
            data = teams[i].getData();
            console.log('team', teams[i]);
            items.push({
                record: teams[i],
                title: data.name
            });
            
        }
        tabPanel.insert(0, items);
        tabPanel.setActiveItem(0);
    },

    showOptions: function(button) {
        Ext.create('Asas.view.Options').showBy(button);
    }

});
