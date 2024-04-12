import PropTypes from 'prop-types'

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  INPUT_PASSWORD: 3,
  INPUT_FILE: 4,
  SELECT: 5,
  INPUT_MAIL: 6,
  CHECKBOX: 7
}

const Field = ({
  type = FIELD_TYPES.INPUT_TEXT,
  label,
  name,
  placeholder,
  valueOption,
  checked,
  onChange,
  defaultValue,
  value,
  editMode,
  onButtonClick,
  rowsTextarea,
  requiredField
}) => {
  let component
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      if (!editMode) {
        component = (
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            className="text-style"
            required
          />
        )
      } else {
        component = (
          <>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              defaultValue={defaultValue}
              className="text-style"
              readOnly
            />
            <div className="container-bouton">
              <button
                type="button"
                onClick={onButtonClick}
                className="submit-style button-edit--style">
                Modifier
              </button>
            </div>
          </>
        )
      }
      break
    case FIELD_TYPES.INPUT_MAIL:
      component = (
        <input
          type="email"
          name={name}
          onChange={onChange}
          required
          placeholder={placeholder}
          autoComplete="username"
          className="text-style"
        />
      )
      break
    case FIELD_TYPES.TEXTAREA:
      component = (
        <textarea
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          required={requiredField}
          className="textarea-style"
          rows={rowsTextarea}
        />
      )
      break
    case FIELD_TYPES.INPUT_PASSWORD:
      component = (
        <input
          type="password"
          placeholder={placeholder}
          name={name}
          autoComplete="current-password"
          required
        />
      )
      break
    case FIELD_TYPES.INPUT_FILE:
      if (editMode) {
        component = (
          <>
            <input
              type="file"
              name={name}
              id={name}
              placeholder={placeholder}
              accept=".jpg, .jpeg, .png, .avif, .webp"
              multiple
              className="file-style"
              onChange={onChange}
            />
            <div className="container-bouton">
              <button
                type="button"
                onClick={onButtonClick}
                className="submit-style button-edit--style">
                Cancel
              </button>
            </div>
          </>
        )
      } else {
        component = (
          <input
            type="file"
            name={name}
            id={name}
            placeholder={placeholder}
            accept=".jpg, .jpeg, .png, .avif, .webp"
            multiple
            className="file-style"
            onChange={onChange}
          />
        )
      }
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
    case FIELD_TYPES.CHECKBOX:
      component = (
        <ul className="lists-style">
          {valueOption.map((item) => (
            <li key={item.id}>
              <div className="custom-checkbox tags-style">
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => onChange(item.name)}
                  checked={value.includes(item.name)}
                  defaultValue={item.name}
                />
                <label
                  htmlFor={item.id}
                  className={`custom-label ${value.includes(item.name) ? 'selected checked' : ''}`}>
                  {item.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      )
      break
    default:
      component = <input type="text" name={name} placeholder={placeholder} required />
  }
  return (
    <div className="inputField">
      <label className="label-style">{label}</label>
      {component}
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
// checked
