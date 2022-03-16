import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Log from './Log'
import Detail from './Detail'

export default class Module extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public value: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasOne(() => Detail)
  public module_name: HasOne <typeof Detail>

  @hasMany(() => Log)
  public Log: HasMany <typeof Log>
}
