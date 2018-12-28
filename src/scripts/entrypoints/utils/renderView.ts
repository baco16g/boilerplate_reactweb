import { map } from 'lodash'
import { render } from 'react-dom'

export default function(selector: string, view: JSX.Element): void {
  const elements = document.querySelectorAll(`[${selector}]`)
  map(elements, element => {
    render(view, element)
  })
}
