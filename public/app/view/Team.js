Ext.define("Asas.view.Team", {

    extend: 'Ext.tab.Panel',

    xtype: 'asas_team',

    requires: [
        'Asas.view.team.Events',
        'Asas.view.team.Members'
    ],

    config: {
        items: [{
            xtype: 'asas_team_events'
        }, {
            xtype: 'asas_team_members'
        }]
    }

});
