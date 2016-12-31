//

exports.Watermark = h => props =>
  h('div', {className: 'watermark'},
    h('i', {className: `fa fa-${props.icon}`})
  )
