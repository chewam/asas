Ext.define('Asas.view.Teams', {

    extend: 'Asas.view.Grid',

    alias: 'widget.asas_teams',

    initComponent: function() {

        Ext.apply(this, {

            store: 'Teams',

            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing')
            ],

            dockedItems: [{
                xtype: 'toolbar',
                items: ['->', {
                    disabled: true,
                    action: 'delete',
                    xtype: 'button',
                    text: 'Supprimer'
                }, '-', {
                    action: 'add',
                    xtype: 'button',
                    text: 'Ajouter'
                }]
            }],

            columns: [{
                flex: 2,
                text: 'Nom',
                dataIndex: 'name',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Email',
                dataIndex: 'email',
                editor: 'textfield'
            }]

        });

        this.callParent(arguments);
    }

});
