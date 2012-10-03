Ext.define('Asas.controller.Teams', {

    extend: 'Asas.controller.Grid',

    views: ['Teams'],

    refs: [{
        ref: 'grid',
        xtype: 'asas_teams',
        selector: 'asas asas_teams'
    }],

    init: function() {
        this.control({
            'asas_teams button[action=add]': {
                click: this.onAddButtonClick
            },
            'asas_teams button[action=delete]': {
                click: this.onDeleteButtonClick
            }
        });
    }

});
