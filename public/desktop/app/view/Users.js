Ext.define('Asas.view.Users', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.asas_users',

    requires: ['Ext.ux.grid.FiltersFeature'],

    frame: true,

    width: 1024,

    minHeight: 600,

    initComponent: function() {

        Ext.apply(this, {
            store: 'Users',

            selType: 'rowmodel',

            selModel: {
                mode: 'MULTI'
            },

            features: [{
                ftype: 'grouping'
            }, {
                local: true,
                ftype: 'filters'
            }],

            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing')
            ],

            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    disabled: true,
                    action: 'mail',
                    xtype: 'button',
                    text: 'Mail'
                }, '->', {
                    disabled: true,
                    action: 'delete',
                    xtype: 'button',
                    text: 'Supprimer'
                }, '-', {
                    action: 'add',
                    xtype: 'button',
                    text: 'Ajouter'
                }]
            }],

            columns: [{
                flex: 1,
                text: 'Nom',
                filterable: true,
                dataIndex: 'lastname',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Prénom',
                filterable: true,
                dataIndex: 'firstname',
                editor: 'textfield'
            }, {
                flex: 1,
                hidden: true,
                text: 'Nationalité',
                dataIndex: 'nationality',
                editor: 'textfield'
            }, {
                flex: 1,
                hidden: true,
                text: 'Lieu de naissance',
                dataIndex: 'birthplace',
                editor: 'textfield'
            }, {
                flex: 1,
                hidden: true,
                filterable: true,
                text: 'Date de naissance',
                dataIndex: 'birthdate',
                editor: 'textfield'
            }, {
                flex: 1,
                hidden: true,
                text: 'Adresse',
                dataIndex: 'address',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Mobile',
                dataIndex: 'mobile',
                editor: 'textfield'
            }, {
                flex: 2,
                text: 'Email',
                filterable: true,
                dataIndex: 'email',
                editor: 'textfield'
            }, {
                flex: 1,
                text: 'Position',
                dataIndex: 'position',
                editor: this.getPositionCombo(),
                renderer: this.PositionRenderer,
                filter: this.getPositionFilter()
            }, {
                width: 55,
                text: 'Inscrit',
                dataIndex: 'registration',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer,
                filter: this.getBinaryFilter()
            }, {
                width: 55,
                text: 'Certif.',
                dataIndex: 'certificate',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer,
                filter: this.getBinaryFilter()
            }, {
                width: 55,
                text: 'Chèque',
                dataIndex: 'check',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer,
                filter: this.getBinaryFilter()
            }, {
                width: 55,
                text: 'Encaissé',
                dataIndex: 'cashed',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer,
                filter: this.getBinaryFilter()
            }, {
                width: 55,
                text: 'Photo',
                dataIndex: 'photo',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer,
                filter: this.getBinaryFilter()
            }, {
                width: 55,
                text: 'Licence',
                dataIndex: 'license',
                editor: this.getBinaryCombo(),
                renderer: this.BinaryRenderer,
                filter: this.getBinaryFilter()
            }, {
                flex: 1,
                hidden: true,
                text: 'Equipe',
                dataIndex: 'team',
                editor: 'textfield'
            }, {
                width: 55,
                text: 'Actif',
                dataIndex: 'active',
                editor: this.getActiveCombo(),
                renderer: this.ActiveRenderer,
                filter: this.getActiveFilter()
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

    getBinaryFilter: function() {
        return {
            type: 'boolean',
            defaultValue: null,
            yesText: 'OK',
            noText: 'KO'
        };
    },

    getActiveCombo: function() {
        return {
            xtype: 'combo',
            store: [
                [false, 'Inactif'],
                [true, 'Actif']
            ],
            queryMode: 'local'
        };
    },

    getActiveFilter: function() {
        return {
            type: 'boolean',
            defaultValue: null,
            yesText: 'Actif',
            noText: 'Inactif'
        };
    },

    getPositionCombo: function() {
        return {
            xtype: 'combo',
            store: [
                ['left side hitter', 'Attaquant gauche'],
                ['right side hitter', 'Attaquant droit'],
                ['middle hitter', 'Central'],
                ['setter', 'Passeur'],
                ['libero', 'Libero']
            ],
            queryMode: 'local'
        };
    },

    getPositionFilter: function() {
        return {
            type: 'list',
            options: [
                ['left side hitter', 'Attaquant gauche'],
                ['right side hitter', 'Attaquant droit'],
                ['middle hitter', 'Central'],
                ['setter', 'Passeur'],
                ['libero', 'Libero']
            ]
        };
    },

    PositionRenderer: function(value) {
        var positions = {
            'left side hitter': 'Attaquant gauche',
            'right side hitter': 'Attaquant droit',
            'middle hitter': 'Central',
            'setter': 'Passeur',
            'libero': 'Libero'
        };
        return positions[value];
    },

    BinaryRenderer: function(value) {
        var OK = '<span style="color:green">OK</span>',
            KO = '<span style="color:darkred">KO</span>';

        return value ? OK : KO;
    },

    ActiveRenderer: function(value) {
        var active = '<span style="color:green">Actif</span>',
            inactive = '<span style="color:darkred">Inactif</span>';

        return value ? active : inactive;
    },

    onSelectionChange: function(selModel, selections) {
        var mailButton =  this.down('button[action=mail]'),
            deleteButton = this.down('button[action=delete]');

        mailButton.setDisabled(selections.length === 0);
        deleteButton.setDisabled(selections.length === 0);
    }

});
