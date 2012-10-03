Ext.application({

    name: 'Asas',

    requires: [
        'Asas.util.Config'
    ],

    models: [
        'User',
        'Team',
        'Event'
    ],

    stores: [
        'Users',
        'Teams',
        'Events'
    ],

    controllers: [
        'Main',
        'Auth',
        'Grid',
        'Users',
        'Teams',
        'Events'
    ],

    appFolder: '/desktop/app'

});
