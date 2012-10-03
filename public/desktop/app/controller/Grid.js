Ext.define('Asas.controller.Grid', {

    extend: 'Ext.app.Controller',

    addRow: function() {
        var grid = this.getGrid(),
            store = grid.getStore();

        store.insert(0, {});
        grid.editingPlugin.startEdit(0, 0);
    },

    deleteRow: function() {
        var grid = this.getGrid(),
            store = grid.getStore(),
            selModel = grid.getSelectionModel(),
            selections = selModel.getSelection();

        if (selections) {
            store.remove(selections);
        }
    },

    /**********/

    onAddButtonClick: function() {
        this.addRow();
    },

    onDeleteButtonClick: function() {
        Ext.Msg.show({
            scope: this,
            constrainHeader: true,
            buttons: Ext.Msg.YESNO,
            title: 'Supprimer un membre',
            msg: 'Etes-vous sur de vouloir la selection ?',
            fn: function(response) {
                if (response === 'yes') {
                    this.deleteRow();
                }
            }
        });
    }

});
