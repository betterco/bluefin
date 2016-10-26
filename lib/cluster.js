import Promise from 'bluebird'

import Client from './client'
import Entity from './entity'

const applicationName = 'malta'

export default class Cluster extends Entity {
  connect (dbName = 'postgres') {
    const dsn = {database: dbName, application_name: applicationName}
    if (this.raw.dsn) Object.assign(dsn, this.raw.dsn)
    return Promise.try(() => {
      if (dsn.user) {
        return this.conf.password(dsn.user).then(password => {
          if (password) dsn.password = password
        })
      }
    }).then(() => Client.connect(dsn))
  }
}