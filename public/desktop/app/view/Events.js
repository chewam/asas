Ext.define('Asas.view.Events', {

    extend: 'Asas.view.Grid',

    alias: 'widget.asas_events',

    initComponent: function() {

        Ext.apply(this, {

            store: 'Events',

            features: [{
                ftype: 'grouping',
                enableGroupingMenu: false,
                groupHeaderTpl: '{name}'
            }, {
                local: true,
                ftype: 'filters'
            }],

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
                text: 'Date',
                dataIndex: 'date',
                editor: 'datefield',
                renderer: Ext.util.Format.dateRenderer('H:i d/m/Y')
            }, {
                flex: 2,
                text: 'Nom',
                dataIndex: 'name',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Type',
                dataIndex: 'type',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Equipe',
                dataIndex: 'team',
                renderer: this.teamRenderer,
                editor: this.getTeamCombo()
            }]

        });

        this.callParent(arguments);
    }

});
