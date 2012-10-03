Ext.define('Asas.model.Team', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'}
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        url: '/api/admin/teams'
    }

});
