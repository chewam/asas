Ext.define("Asas.view.team.EventForm", {

    extend: 'Ext.form.Panel',

    xtype: 'asas_team_eventform',

    requires: ['Ext.field.Select'],

    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                name: 'name',
                label: 'Name',
                xtype: 'textfield'
            }, {
                xtype: 'selectfield',
                label: 'Type',
                name: 'type',
                options: [
                    {text: 'Match',  value: 'match'},
                    {text: 'Friendly',  value: 'friendly'},
                    {text: 'Training',  value: 'training'}
                ]
            }, {
                name: 'date',
                label: 'Date',
                xtype: 'datepickerfield',
                value: new Date(),
                dateFormat: 'd/m/Y',
                picker: {
                    slotOrder: ['day', 'month', 'year'],
                    yearTo: (new Date()).getFullYear() + 2,
                    yearFrom: (new Date()).getFullYear() - 2
                    
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                action: 'cancel',
                text: 'Cancel',
                xtype: 'button'
            }, {
                action: 'submit',
                text: 'Add event',
                xtype: 'button'
            }]
        }]
    }

});
