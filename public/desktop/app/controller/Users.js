Ext.define('Asas.controller.Users', {

    extend: 'Ext.app.Controller',

    views: ['Users'],

    models: ['User'],

    stores: ['Users'],

    refs: [{
        ref: 'grid',
        autoCreate: true,
        xtype: 'asas_users',
        selector: 'asas_users'
    }],

    init: function() {
        this.control({
            'asas_users button[action=add]': {
                click: this.onAddButtonClick
            },
            'asas_users button[action=delete]': {
                click: this.onDeleteButtonClick
            }
        });
        this.renderGrid();
    },

    renderGrid: function() {
        var grid = this.getGrid();

        grid.render('grid');
        grid.getStore().load();
        Ext.Msg.render(grid.getEl());
    },

    addUser: function() {
        var grid = this.getGrid(),
            store = grid.getStore();

        store.insert(0, {});
        grid.editingPlugin.startEdit(0, 0);
    },

    deleteUser: function() {
        var grid = this.getGrid(),
            store = grid.getStore(),
            selModel = grid.getSelectionModel(),
            selection = selModel.getSelection()[0];

        if (selection) {
            store.remove(selection);
        }
    },

    /**********/

    onAddButtonClick: function() {
        this.addUser();
    },

    onDeleteButtonClick: function() {
        Ext.Msg.show({
            scope: this,
            constrainHeader: true,
            buttons: Ext.Msg.YESNO,
            title: 'Supprimer un membre',
            msg: 'Etes-vous sur de vouloir supprimer ce membre ?',
            fn: function(response) {
                if (response === 'yes') {
                    this.deleteUser();
                }
            }
        });
    }

});
