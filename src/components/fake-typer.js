//

const {createClass, stream} = require('dio.js')

//

exports.FakeTyper = createClass(FakeTyper)

//

function FakeTyper (h) {
  return {

    getDefaultProps () {
      return {
        cursor: '|',
        cursorBlinkingSpeed: 500,
        erasingSpeed: 50,
        prefix: '',
        suffix: '',
        typingSpeed: 100,
        waitingTime: 2000,
        words: []
      }
    },

    getInitialState () {
      return {
        componentWillUnmountWatchInterval: null,
        animationInterval: null,
        isVisibleCursor: true,
        letterIndex: 0,
        text: '',
        word: '',
        wordIndex: 0,
        wordLength: 0
      }
    },

    componentDidMount (DOMNode) {
      this.mounted = true

      const checkDOMNodeInDocument = () => {
        // @HACK(douglasduteil): diojs@5 is not unmounting component on route change
        // Like diojs@5 is just forcing page rerender on route change,
        // I will be wtaching at the mounted DOM node
        if (!document.body.contains(DOMNode)) {
          this.componentWillUnmount()
        }
      }
      this.state.componentWillUnmountWatchInterval = setInterval(checkDOMNodeInDocument, 100)

      ;(function typingLoop () {
        if (!this.mounted) {
          return
        }

        this.state.word = this.props.words[this.state.wordIndex]

        Promise.resolve()
          .then(() => new Promise(type.bind(this)))
          .then(() => new Promise(wait.bind(this)))
          .then(() => new Promise(erase.bind(this)))
          .then(() => {
            this.state.wordIndex = (this.state.wordIndex + 1) % this.props.words.length
          })
          .then(typingLoop.bind(this))
      }.bind(this))()
    },

    componentWillUnmount () {
      this.mounted = false
      clearInterval(this.state.componentWillUnmountWatchInterval)
      clearInterval(this.state.animationInterval)
    },

    render (props, state) {
      return h('div',
        h('span', props.prefix),
        h('span', state.text),
        h('span', {
          style: {
            visibility: this.state.isVisibleCursor ? 'visible' : 'hidden'
          }
        }, props.cursor)
      )
    }
  }
}

//

function wait (callback) {
  this.state.animationInterval = setInterval(() => {
    this.setState({isVisibleCursor: !this.state.isVisibleCursor})
  }, this.props.cursorBlinkingSpeed)

  setTimeout(() => {
    clearInterval(this.state.animationInterval)
    callback()
  }, this.props.waitingTime)
}

function type (callback) {
  typing.call(this, 1, callback)
}

function erase (callback) {
  typing.call(this, -1, callback)
}

function typing (direction, callback) {
  const isTyping = direction > 0
  let [limit, letterIndex] = isTyping
  ? [this.state.word.length, 0]
  : [0, this.state.word.length]

  this.state.animationInterval = setInterval(() => {
    letterIndex += direction
    this.setState({text: this.state.word.substr(0, letterIndex)})

    if (letterIndex === limit) {
      clearInterval(this.state.animationInterval)
      callback()
    }
  }, this.props.typingSpeed)
}
