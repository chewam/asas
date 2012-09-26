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
            'asas_users button[action=mail]': {
                click: this.onMailButtonClick
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
            selections = selModel.getSelection();

        if (selections) {
            store.remove(selections);
        }
    },

    showEmails: function() {
        var emails = [],
            grid = this.getGrid(),
            store = grid.getStore(),
            selModel = grid.getSelectionModel(),
            selections = selModel.getSelection();

        Ext.Array.each(selections, function(record) {
            if (record.get('email').length) {
                emails.push(record.get('email'));
            }
        });
        emails = emails.join(', ');

        if (emails.length) {
            Ext.create('Ext.Window', {
                title: 'Emails',
                modal: true,
                width: 300,
                height: 300,
                bodyPadding: 10,
                autoScroll: true,
                styleHtmlContent: true,
                html: emails,
                renderTo: grid.getEl()
            }).show();
        }
    },

    /**********/

    onAddButtonClick: function() {
        this.addUser();
    },

    onMailButtonClick: function() {
        this.showEmails();
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
                    this.deleteUser();
                }
            }
        });
    }

});
