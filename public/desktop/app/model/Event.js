Ext.define('Asas.model.Event', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'name', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'date', type: 'date'},
        {name: 'team', type: 'int'},
        {name: 'teamName', type: 'string'}
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        url: '/api/admin/events'
    }

});
