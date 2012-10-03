Ext.define('Asas.controller.Events', {

    extend: 'Asas.controller.Grid',

    views: ['Events'],

    refs: [{
        ref: 'grid',
        xtype: 'asas_events',
        selector: 'asas asas_events'
    }],

    init: function() {
        this.control({
            'asas_events button[action=add]': {
                click: this.onAddButtonClick
            },
            'asas_events button[action=delete]': {
                click: this.onDeleteButtonClick
            }
        });
    }

});
