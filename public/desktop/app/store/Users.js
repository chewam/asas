Ext.define('Asas.store.Users', {

    extend: 'Ext.data.Store',

    model: 'Asas.model.User',

    autoSync: true,

    groupField: 'team'

});
