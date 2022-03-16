import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MonitoringController {

    getDashboard = async ({ view }: HttpContextContract) => {
        return view.render('index')
    }
    getForm = async ({ view }: HttpContextContract) => {
        return view.render('form')
    }
}
