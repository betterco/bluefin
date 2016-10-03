import pg from 'pg'
import Promise from 'bluebird'

const applicationName = 'malta'

export default class Endpoint {
  constructor (conf, name, raw) {
    this.conf = conf
    this.name = raw.name || name
    this.loc = raw
    if ('name' in this.loc) delete this.loc.name
  }

  connect (dbName='postgres') {
    let vow
    if (this.loc.user) {
      vow = this.conf.password(this.loc.user).then(password => {
        return Object.assign({}, this.config, {password})
      })
    } else {
      vow = Promise.resolve(Object.assign({}, this.loc))
    }
    return vow.then(loc => {
      loc.database = dbName
      loc.application_name = applicationName
      const client = new pg.Client(loc)
      return Promise.fromCallback(cb => client.connect(cb))
        .then(() => client)
    })
  }
}