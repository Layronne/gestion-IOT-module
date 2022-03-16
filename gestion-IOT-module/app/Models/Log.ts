import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Log extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public etat: boolean

  @column()
  public value: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
