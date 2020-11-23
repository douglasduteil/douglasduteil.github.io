import onPerformance from 'on-performance'
import nanologger from 'nanologger'

export function devtools(state, emitter) {
  const log = nanologger('hyperchoo')
  const stop = onPerformance(function (timing) {
    if (!timing) return
    if (timing.entryType !== 'measure') return

    const eventName = timing.name
    if (!/hyperchoo/.test(eventName)) return

    const duration = timing.duration.toFixed()
    const level = duration < 50 ? 'info' : 'warn'
    log[level](eventName, `~${duration}ms`)
  })

  emitter.once('destroy', () => {
    stop()
  })
}
