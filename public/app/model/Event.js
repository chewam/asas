Ext.define('Asas.model.Event', {

    extend: 'Ext.data.Model',

    config: {
        proxy: {
            type: 'rest'
        },
        fields: [{
            name: 'name',
            type: 'string'
        }, {
            name: 'date',
            type: 'date',
            dateFormat: 'c'
        }]
    }

});
