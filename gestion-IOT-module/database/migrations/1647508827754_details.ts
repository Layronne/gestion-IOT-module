import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Details extends BaseSchema {
  protected tableName = 'details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type_name')
      table.string('module_name')
      table.boolean('etat')
      table.string('location')
      table.string('transport_type')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
