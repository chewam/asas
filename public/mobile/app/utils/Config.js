Ext.define("Asas.utils.Config", {

    singleton: true,

    extend: 'Object',

    config: {
        user: null,
        api: {
            login: '/api/login',
            logout: '/api/logout',
            register: '/api/register',
            teams: '/api/teams'
        },
        tpl: {
            event: [
                '<div>',
                    '<img src="http://placehold.it/40&text=training" />',
                '</div>',
                '<div>{type}</div>',
                '<div>{name} {date:date("d/m/Y")}</div>'
            ],
            member: [
                '<div>',
                    '<img src="http://placehold.it/40&text=photo" />',
                '</div>',
                '<div>{name} {date:date("d/m/Y")}</div>'
            ]
        }
    },

    constructor: function(config) {
        config = Ext.apply(config || {}, {
            user: _USER_
        });
        this.initConfig(config);
    }

});
