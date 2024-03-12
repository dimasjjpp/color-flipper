import './style.css'

const COLOR_PALETTE = {
  '#562C2C': 'caput moorum',
  '#F2542D': 'cinabar',
  '#F5DFBB': 'Wheat',
  '#0e9594': 'Dark Cyan',
  '#127475': 'Caribbean Current'
}
const colorPickerSelect = document.querySelector('#color-picker')
const addOptionsToColorPicker = () => {
  Object.keys(COLOR_PALETTE).map((color) => {
    const option = document.createElement('option')
    option.value = color
    option.innerText = COLOR_PALETTE[color]
    colorPickerSelect.append(option)
  })
}

const addEventListenerToColorPicker = () => {
  const colorName = document.querySelector('#color-name')
  colorPickerSelect.addEventListener('change', (ev) => {
    console.log(ev.target.value)
    const newColor = ev.target.value
    document.body.style.backgroundColor = newColor

    const newColorText = `${COLOR_PALETTE[newColor]} | ${newColor}` || '-'
    colorName.innerText = COLOR_PALETTE[newColor] ? newColorText : '-'
  })
}

addOptionsToColorPicker()
addEventListenerToColorPicker()
