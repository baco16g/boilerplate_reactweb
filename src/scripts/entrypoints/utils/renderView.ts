import { render } from 'react-dom'
import { map } from 'lodash'

export default function(selector: string, view: JSX.Element): void {
  const elements = document.querySelectorAll(`[${selector}]`)
  map(elements, element => {
    render(view, element)
  })
}
