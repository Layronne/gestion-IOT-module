import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logs extends BaseSchema {
  protected tableName = 'logs'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('moduleid')
      table.integer('module_id')
           .unsigned()
           .references('modules.id')
           .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
