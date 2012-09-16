Ext.define("Asas.view.Options", {

    extend: 'Ext.Panel',

    xtype: 'asas_options',

    config: {
        left: 0,
        width: 300,
        height: 200,
        modal: true,
        layout: 'vbox',
        hideOnMaskTap: true,
        listeners: {
            hide: 'destroy'
        },
        items:[{
            xtype: 'button',
            action: 'showeventform',
            text: 'ajouter un évènement'
        }, {
            xtype: 'button',
            action: 'jointeam',
            text: 'devenir membre de l\'équipe'
        }]
    }

});
