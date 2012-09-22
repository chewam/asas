Ext.define("Asas.view.Topbar", {

    extend: 'Ext.Toolbar',

    xtype: 'asas_topbar',

    config: {
        title: 'ASAS VOLLEY-BALL',
        items:[{
            flex: 1,
            xtype: 'spacer'
        }, {
            xtype: 'button',
            text: 'options',
            action: 'options'
        }]
    }

});
