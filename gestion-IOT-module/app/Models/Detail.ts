import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Detail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public etat: boolean

  @column()
  public location: string

  @column()
  public transport_type: string

  @column()
  public type_name: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
