Ext.define('Asas.view.Grid', {

    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.ux.grid.FiltersFeature'
    ],

    selType: 'rowmodel',

    selModel: {
        mode: 'MULTI'
    },

    minHeight: 600,

    initComponent: function() {
        this.callParent(arguments);

        this.getSelectionModel().on({
            scope: this,
            selectionchange: this.onSelectionChange
        });
    },

    getTeamCombo: function() {
        return {
            xtype: 'combo',
            store: 'Teams',
            displayField: 'name',
            valueField: 'id',
            queryMode: 'local'
        };
    },

    teamRenderer: function(value, metaData, record) {
        return record.get('teamName');
    },

    /**********/

    onSelectionChange: function(selModel, selections) {
        var mailButton =  this.down('button[action=mail]'),
            deleteButton = this.down('button[action=delete]');

        if (mailButton) {
            mailButton.setDisabled(selections.length === 0);
        }
        deleteButton.setDisabled(selections.length === 0);
    }

});
