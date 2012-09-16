Ext.define('Asas.controller.Team', {

    extend: 'Ext.app.Controller',

    config: {

        views: [
            'Team',
            'team.EventForm'
        ],

        refs: {
            mainPanel: 'viewport > asas_main'
        },

        control: {
            'asas_team_events': {
                activate: 'onEventsPanelActivate'
            },
            'asas_team_members': {
                activate: 'onMembersPanelActivate'
            },
            'asas_options button[action=jointeam]': {
                tap: 'onJoinTeamButtonTap'
            },
            'asas_options button[action=showeventform]': {
                tap: 'onShowEventFormButtonTap'
            },
            'asas_team_eventform button[action=addevent]': {
                tap: 'onAddEventButtonTap'
            },
            'asas_team_eventform button[action=cancel]': {
                tap: 'onCancelEventButtonTap'
            },
            'asas_team_eventform button[action=submit]': {
                tap: 'onSubmitEventButtonTap'
            }
        }

    },

    init: function() {
        console.log('init team');
    },

    launch: function() {
        console.log('launch team');
    },

    onMembersPanelActivate: function(panel) {
        var url, members,
            teamPanel = panel.up('asas_team'),
            team = teamPanel.getRecord();

        console.log('onMembersPanelActivate', team);

        if (team) {
            url = Asas.utils.Config.getApi().teams + '/' + team.getId() + '/members';
            // url = 'http://localhost:3000/api/teams/'+team.getId()+'/members';
            members = team.members();
            members.getProxy().setUrl(url);
            panel.setStore(members);
            members.load(function(members) {
                console.log('onEventsPanelActivate', members);
            });
        }
    },

    onEventsPanelActivate: function(panel) {
        var url, events,
            teamPanel = panel.up('asas_team'),
            team = teamPanel.getRecord();

        console.log('onEventsPanelActivate', team);

        if (team) {
            // url = 'http://localhost:3000/api/teams/'+team.getId()+'/events';
            url = Asas.utils.Config.getApi().teams + '/' + team.getId() + '/events';
            events = team.events();
            console.log('onEventsPanelActivate 2', events);
            events.getProxy().setUrl(url);
            panel.setStore(events);
            events.load(function(events) {
                console.log('onEventsPanelActivate 3', events);
            });
        }
    },

    onJoinTeamButtonTap: function(button) {
        button.up('panel').hide();
        this.joinTeam();
    },

    onShowEventFormButtonTap: function(button) {
        button.up('panel').hide();
        this.showEventForm();
    },

    onSubmitEventButtonTap: function(button) {
        var values = button.up('formpanel').getValues();

        console.log('onSubmitEventButtonTap', button, values);
        if (values.name.length) {
            this.addEvent(values);
            button.up('sheet').hide();
        }
    },

    onCancelEventButtonTap: function(button) {
        button.up('sheet').hide();
    },

    /**********/

    showEventForm: function() {
        Ext.Viewport.add(Ext.create('Ext.Sheet', {
            layout: 'fit',
            stretchX: true,
            stretchY: true,
            listeners: {hide: 'destroy'},
            items: [{
                xtype: 'asas_team_eventform'
            }]
        })).show();
    },

    joinTeam: function() {
        var mainPanel = this.getMainPanel(),
            teamPanel = mainPanel.getActiveItem(),
            membersPanel = teamPanel.down('asas_team_members'),
            store = membersPanel.getStore();

        console.log('joinTeam', Asas.utils.Config.getUser());
        store.add({
            id: Asas.utils.Config.getUser().id,
            name: Asas.utils.Config.getUser().name
        });
        store.last().save();
        // var mainPanel = this.getMainPanel(),
        //     team = mainPanel.getActiveItem().getRecord(),
        //     url = 'http://localhost:3000/api/teams/'+team.getId()+'/join',
        //     msg = 'Are you sure you want to join the <i>'+ team.get('name')+'</i> team?';

        // Ext.Msg.confirm('Join team', msg, function(response) {
        //     if (response === 'yes') {
        //         Ext.Ajax.request({
        //             scope: this,
        //             url: url,
        //             success: function() {

        //             }
        //         });
        //     }
        // }, this);
    },

    addEvent: function(values) {
        var mainPanel = this.getMainPanel(),
            teamPanel = mainPanel.getActiveItem(),
            eventsPanel = teamPanel.down('asas_team_events'),
            store = eventsPanel.getStore();

        console.log('addEvent', values.date, store.getRange());
        store.add(values);
        store.last().save();
    }

});
