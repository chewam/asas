Ext.define("Asas.view.team.Events", {

    extend: 'Ext.List',

    xtype: 'asas_team_events',

    config: {
        title: 'Events',
        itemTpl: Asas.utils.Config.getTpl().event
    }

});