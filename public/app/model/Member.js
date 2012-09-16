Ext.define('Asas.model.Member', {

    extend: 'Ext.data.Model',

    config: {
        proxy: {
            type: 'rest'
        },
        fields: [{
            name: 'name',
            type: 'string'
        }]
    }

});
