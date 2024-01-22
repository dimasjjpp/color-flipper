import './style.css'

const COLOR_PALETTE = {
  '#562C2C': 'caput moorum',
  '#F2542D': 'cinabar',
  '#F5DFBB': 'Wheat',
  '#0e9594': 'Dark Cyan',
  '#127475': 'Caribbean Current'
}
const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')

  Object.keys(COLOR_PALETTE).map((color) => {
    const option = document.createElement('option')
    option.value = color
    option.innerText = COLOR_PALETTE[color]
    colorPickerSelect.append(option)
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')
  const colorName = document.querySelector('#color-name')
  colorPickerSelect.addEventListener('change', (ev) => {
    console.log(ev.target)
    const newColor = ev.target.value
    document.body.style.backgroundColor = newColor

    const colorName = `${COLOR_PALETTE[newColor]} | $ {newColor}` || '-'
    colorName.innerText = COLOR_PALETTE[newColor ? colorNameText : '-']
  })
}

//afegir input color i segons el color que es mostri en el foins de pantalla dianmicament

addOptionsToColorPicker()
addEventListenerToColorPicker()
