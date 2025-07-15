import { consola } from 'consola'

export class MLog {
  static info(key: string, value: any) {
    consola.info(`${key} ===> `, value)
  }
}
