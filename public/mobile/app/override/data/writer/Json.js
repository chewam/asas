Ext.define('Asas.override.data.writer.Json', {
  override: 'Ext.data.writer.Json',
  getRecordData: function(record) {
        var isPhantom = record.phantom === true,
            writeAll = this.getWriteAllFields() || isPhantom,
            nameProperty = this.getNameProperty(),
            fields = record.getFields(),
            data = {},
            changes, name, field, key, value, fieldConfig;
        if (writeAll) {
            fields.each(function(field) {
                fieldConfig = field.config;
                if (fieldConfig.persist) {
                    name = fieldConfig[nameProperty] || fieldConfig.name;
                    value = record.get(fieldConfig.name);
                    if (fieldConfig.type == 'date' || fieldConfig.type.type == 'date') {
                        value = this.writeDate(fieldConfig, value);
                    }
                    data[name] = value;
                }
            }, this);
        } else {
            // Only write the changes
            changes = record.getChanges();
            for (key in changes) {
                if (changes.hasOwnProperty(key)) {
                    field = fields.get(key);
                    fieldConfig = field.config;
                    if (fieldConfig.persist) {
                        name = fieldConfig[nameProperty] || field.name;
                        value = changes[key];
                        if (fieldConfig.type == 'date' || fieldConfig.type.type == 'date') {
                            value = this.writeDate(fieldConfig, value);
                        }
                        data[name] = value;
                    }
                }
            }
            if (!isPhantom) {
                // always include the id for non phantoms
                data[record.getIdProperty()] = record.getId();
            }
        }
        return data;
    }
});
