Ext.define('Asas.store.Teams', {

    extend: 'Ext.data.Store',

    config: {
        model: 'Asas.model.Team',
        storeId: 'teams',
        proxy: {
            type: 'rest',
            url: Asas.utils.Config.getApi().teams
        }
    }

});
