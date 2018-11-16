//

import nanoraf from 'nanoraf'

import jss from '../jss'
import { githubIcon, locationIcon, suitcaseIcon } from './svg'
import styles from './me.scss'
import miniMe from './mini_me.jpeg'

const gravatarPic = '//1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1'

const sheet = jss.createStyleSheet(styles)
sheet.addRules({
  '@global main': {
    backgroundImage: `url(${gravatarPic + '?s=680'}), url(${miniMe})`
  }
})
const { classes } = sheet

const activities = [
  '===========',
  'Contributor',
  'Developer',
  'Musician',
  'Gamer',
  'Sleeper',
  'Jogger',
]

const _ = {}
export default ({ hyper: { bind, wire } }, state, emit) => {
  return wire(_, ':me')`
    <section class=${classes.section}>
      <ul class=${classes.ul}>
        <li class=${classes.li}>
          <h1 class=${classes.h1}>
            Douglas Duteil
          </h1>
        </li>
        <li class=${classes.li}>
          ${typer({bind, wire})(activities, { prefix: '#', orderFn: randomTyperOrder })}
        </li>
        <li class=${classes.li}>
          <i class=${classes.i}>${locationIcon(wire)}</i>
          <div>Paris, France</div>
        </li>
        <li class=${classes.li}>
          <i class=${classes.i}>${githubIcon(wire)}</i>
          <div>OneDoes Member</div>
        </li>
        <li class=${classes.li}>
          <i class=${classes.i}>${suitcaseIcon(wire)}</i>
          <div>Front End Developer</div>
        </li>
      </ul>
    </section>

    <style>${{ html: sheet.toString() }}</style>
  `
}

//

function typer({bind, wire}) {
  const root = wire(_, ':my-supa-cinematic-hacker-typer')`
    <my-supa-cinematic-hacker-typer class=${classes['hacker-typer']}>
    </my-supa-cinematic-hacker-typer>
  `

  return (words, {prefix, orderFn}) => {
    //
    bind(root)`${prefix} ${words[0]}`

    const updateLoop = () => {
      if (!document.body.contains(root)) {
        // The supa hacker typer is no longueur in the DOM bro !
        clearInterval(loopId)
        return
      }

      const doRender = () => bind(root)`# ${orderFn(words)}`
      nanoraf(doRender)()
    }

    const loopId = typeof document === 'object'
    ? setInterval(updateLoop, 1000) : NaN

    return root
  }
}

function randomTyperOrder(words) {
  return words[Math.floor(Math.random() * words.length)]
}
