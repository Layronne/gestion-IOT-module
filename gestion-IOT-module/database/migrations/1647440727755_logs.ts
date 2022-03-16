import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logs extends BaseSchema {
  protected tableName = 'logs'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('module_id')
      table.integer('moduleid')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
