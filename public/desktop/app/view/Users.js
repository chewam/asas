Ext.define('Asas.view.Users', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.asas_users',

    frame: true,

    minHeight: 600,

    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [{
                xtype: 'toolbar',
                items: ['->', {
                    disabled: true,
                    action: 'delete',
                    xtype: 'button',
                    text: 'Supprimer ce membre'
                }, '-', {
                    action: 'add',
                    xtype: 'button',
                    text: 'Ajouter un membre'
                }]
            }],

            store: 'Users',

            selType: 'rowmodel',

            features: [
                {ftype: 'grouping'}
            ],

            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing')
            ],

            columns: [{
                flex: 1,
                text: 'Nom',
                dataIndex: 'lastname',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Prénom',
                dataIndex: 'firstname',
                editor: 'textfield'
            },{
                flex: 1,
                hidden: true,
                text: 'Nationalité',
                dataIndex: 'nationality',
                editor: 'textfield'
            },{
                flex: 1,
                hidden: true,
                text: 'Lieu de naissance',
                dataIndex: 'birthplace',
                editor: 'textfield'
            },{
                flex: 1,
                hidden: true,
                text: 'Date de naissance',
                dataIndex: 'birthdate',
                editor: 'textfield'
            },{
                flex: 1,
                hidden: true,
                text: 'Adresse',
                dataIndex: 'address',
                editor: 'textfield'
            },{
                flex: 1,
                text: 'Mobile',
                dataIndex: 'mobile',
                editor: 'textfield'
            },{
                flex: 2,
                text: 'Email',
                dataIndex: 'email',
                editor: 'textfield'
            },{
                width: 55,
                text: 'Inscrit',
                dataIndex: 'registration',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer
            },{
                width: 55,
                text: 'Certif.',
                dataIndex: 'certificate',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer
            },{
                width: 55,
                text: 'Chèque',
                dataIndex: 'check',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer
            },{
                width: 55,
                text: 'Encaissé',
                dataIndex: 'cashed',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer
            },{
                width: 55,
                text: 'Photo',
                dataIndex: 'photo',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer
            },{
                width: 55,
                text: 'Licence',
                dataIndex: 'license',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer
            },{
                flex: 1,
                hidden: true,
                text: 'Equipe',
                dataIndex: 'team',
                editor: 'textfield'
            }]
        });

        this.callParent(arguments);

        this.getSelectionModel().on({
            scope: this,
            selectionchange: this.onSelectionChange
        });
    },

    getBinaryCombo: function() {
        return {
            xtype: 'combo',
            store: [
                [false, 'KO'],
                [true, 'OK']
            ],
            queryMode: 'local'
        };
    },

    BinaryRenderer: function(value) {
        var OK = '<span style="color:green">OK</span>',
            KO = '<span style="color:darkred">KO</span>';

        return value ? OK : KO;
    },

    onSelectionChange: function(selModel, selections) {
        var button = this.down('button[action=delete]');

        button.setDisabled(selections.length === 0);
    }

});
