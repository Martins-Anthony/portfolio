import Field, { FIELD_TYPES } from '../../../components/Field'
import { postProject } from './postProjectSlice'
import { useDispatch, useSelector } from 'react-redux'

function Add() {
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', event.target.title.value)
    formData.append('description', event.target.description.value)
    formData.append('image', event.target.image.files[0])
    formData.append('linkGithub', event.target.linkGithub.value)
    formData.append('linkDemo', event.target.linkDemo.value)

    const tags = event.target.tags.options
    const selectedTags = []
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].selected) {
        selectedTags.push(tags[i].value)
      }
    }

    formData.append('tags', JSON.stringify(selectedTags))

    dispatch(postProject(formData))
  }
  return (
    <form onSubmit={handleSubmit} className="form-container form-add">
      <legend>Add project</legend>
      <div className="form-container_text">
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Title :"
          name="title"
          placeholder="Enter title"
        />
        <Field
          type={FIELD_TYPES.SELECT}
          label="Tags :"
          name="tags"
          placeholder="Enter tags"
          valueOption={'React;Redux Toolkit;HTML/CSS;Scss;JavaScript'}
        />
      </div>
      <div className="form-container_text">
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Link GitHub :"
          name="linkGithub"
          placeholder="Enter link to GitHub"
        />
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Link Demo :"
          name="linkDemo"
          placeholder="Enter link to Demo"
        />
      </div>
      <Field type={FIELD_TYPES.INPUT_FILE} label="Images :" name="image" placeholder="Add images" />
      <Field
        type={FIELD_TYPES.TEXTAREA}
        label="Description :"
        name="description"
        placeholder="Enter description"
      />
      <button type="submit" className="submit-style btn">
        Submit
      </button>
    </form>
  )
}

export default Add
