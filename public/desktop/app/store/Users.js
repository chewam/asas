Ext.define('Asas.store.Users', {

    extend: 'Ext.data.Store',

    model: 'Asas.model.User',

    requires: ['Asas.model.User'],

    // autoLoad: true,

    autoSync: true,

    groupField: 'team',

    sorters: [{
        property: 'team',
        direction: 'ASC'
    }, {
        property: 'position',
        direction: 'ASC'
    }],

    listeners: {
        write: function() {
            this.sort();
        }
    }

});
