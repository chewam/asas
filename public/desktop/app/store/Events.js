Ext.define('Asas.store.Events', {

    extend: 'Ext.data.Store',

    model: 'Asas.model.Event',

    requires: ['Asas.model.Event'],

    // autoLoad: true,

    autoSync: true,

    groupField: 'team',

    sorters: [{
        property: 'name',
        direction: 'ASC'
    }],

    listeners: {
        write: function() {
            this.sort();
        }
    }

});
