Ext.define('Asas.view.Main', {

    extend: 'Ext.container.Container',

    alias: 'widget.asas',

    requires: ['Asas.view.Users'],

    width: 1024,

    initComponent: function() {

        Ext.apply(this, {
            items: [{
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                xtype: 'container',
                margin: '0 0 4 0',
                items: [{
                    xtype: 'container',
                    styleHtmlContent: true,
                    html: '<h1 style="padding: 0;margin: 0; color: #15498B">ASAS MANAGER</h1>'
                }, {
                    flex: 1,
                    xtype: 'tbspacer'
                }, {
                    hidden: true,
                    role: 'info',
                    xtype: 'container'
                    // html: 'gary@chewam.com'
                }, {
                    width: 5,
                    xtype: 'tbspacer'
                }, {
                    hidden: true,
                    text: 'logout',
                    action: 'logout',
                    xtype: 'button'
                }]
            }, {
                xtype: 'tabpanel',
                items: [{
                    title: 'Membres',
                    xtype: 'asas_users'
                }, {
                    title: 'Equipes',
                    xtype: 'asas_teams'
                }, {
                    title: 'Evènements',
                    xtype: 'asas_events'
                }]
            }]
        });

        this.callParent(arguments);
    }

});
