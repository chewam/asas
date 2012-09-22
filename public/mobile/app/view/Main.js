Ext.define("Asas.view.Main", {

    extend: 'Ext.tab.Panel',

    xtype: 'asas_main',

    requires: [
        'Asas.view.Topbar',
        'Asas.view.Options'
    ],

    config: {
        tabBarPosition: 'bottom',

        defaults: {
            iconCls: 'user',
            xtype: 'asas_team'
        },

        items:[{
            docked: 'top',
            xtype: 'asas_topbar'
        }, {
            xtype: 'panel',
            title: 'About',
            iconCls: 'action'
        }]
    }

});
