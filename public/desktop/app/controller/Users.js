Ext.define('Asas.controller.Users', {

    extend: 'Asas.controller.Grid',

    views: ['Users'],

    refs: [{
        ref: 'grid',
        xtype: 'asas_users',
        selector: 'asas asas_users'
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

    onMailButtonClick: function() {
        this.showEmails();
    }

});
