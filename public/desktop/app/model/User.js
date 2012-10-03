Ext.define('Asas.model.User', {

    extend: 'Ext.data.Model',

    fields: [
        {name: 'lastname', type: 'string'},
        {name: 'firstname', type: 'string'},
        {name: 'nationality', type: 'string'},
        {name: 'birthplace', type: 'string'},
        {name: 'birthdate', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'mobile', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'registration', type: 'boolean'},
        {name: 'certificate', type: 'boolean'},
        {name: 'check', type: 'boolean'},
        {name: 'cashed', type: 'boolean'},
        {name: 'photo', type: 'boolean'},
        {name: 'license', type: 'boolean'},
        {name: 'team', type: 'int'},
        {name: 'teamName', type: 'string'},
        {name: 'position', type: 'string'},
        {name: 'active', type: 'boolean', defaultValue: true}
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        url: '/api/admin/users'
    }

});
