Ext.define('Asas.model.Team', {

    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'name',
            type: 'string'
        }],
        hasMany: [{
            name: 'events',
            model: 'Asas.model.Event'
        }, {
            name: 'members',
            model: 'Asas.model.Member'
        }]
    }

});
