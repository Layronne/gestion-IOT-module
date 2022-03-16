import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Details extends BaseSchema {
  protected tableName = 'details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('module_name')
      table.boolean('etat')
      table.string('location')
      table.string('transport_type')
      table.string('type_name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
