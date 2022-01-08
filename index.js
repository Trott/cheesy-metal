import metal from 'metal-name'
import cheese from 'cheese-name'

export default function () {
  if (Math.random() < 0.5) { return `${metal({ fragment: 'start' })} ${cheese()}` }
  return `${cheese()} ${metal({ fragment: 'end' })}`
}
