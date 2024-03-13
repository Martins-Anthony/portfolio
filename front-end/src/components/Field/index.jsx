import PropTypes from 'prop-types'

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  INPUT_PASSWORD: 3,
  INPUT_FILE: 4,
  SELECT: 5
}

const Field = ({
  type = FIELD_TYPES.INPUT_TEXT,
  label,
  name,
  placeholder,
  valueOption,
  checked
}) => {
  let component
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input type="text" name={name} placeholder={placeholder} required className="text-style" />
      )
      break
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} required className="textarea-style" />
      break
    case FIELD_TYPES.INPUT_PASSWORD:
      component = <input type="password" name={name} placeholder={placeholder} required />
      break
    case FIELD_TYPES.INPUT_FILE:
      component = (
        <input
          type="file"
          name={name}
          id={name}
          placeholder={placeholder}
          accept=".jpg, .jpeg, .png, .avif, .webp"
          multiple
          className="file-style"
        />
      )
      break
    case FIELD_TYPES.SELECT:
      const options = valueOption.split(';')
      const itemsOptions = options.map((item, index) => {
        return (
          <option type="checkbox" key={index} value={item} checked={checked}>
            {item}
          </option>
        )
      })
      component = (
        <select name={name} className="select-style" placeholder={placeholder} multiple required>
          {itemsOptions}
        </select>
      )
      break
    default:
      component = <input type="text" name={name} placeholder={placeholder} required />
  }
  return (
    <div className="inputField">
      <label className="label-style">
        {label}
        {component}
      </label>
    </div>
  )
}

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}
Field.defaultProps = {
  label: '',
  placeholder: '',
  type: FIELD_TYPES.INPUT_TEXT,
  name: 'field-name'
}

export default Field
