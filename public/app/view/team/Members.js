Ext.define("Asas.view.team.Members", {

    extend: 'Ext.List',

    xtype: 'asas_team_members',

    config: {
        title: 'Members',
        itemTpl: '{name}'
    }

});
