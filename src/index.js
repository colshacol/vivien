import { Signale } from 'signale'

global.log = new Signale({})

import Vivien from './Vivien'
import VivienServer from './VivienServer'

export default {
  Vivien,
  VivienServer
}
