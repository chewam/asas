Ext.define('Asas.store.Teams', {

    extend: 'Ext.data.Store',

    model: 'Asas.model.Team',

    requires: ['Asas.model.Team'],

    // autoLoad: true,

    autoSync: true,

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
