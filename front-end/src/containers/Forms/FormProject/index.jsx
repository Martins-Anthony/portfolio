import React, { useState, useRef } from 'react'
import Field, { FIELD_TYPES } from '../../../components/Field'
import { postProject } from '../PostProject/postProjectSlice'
import { putProject } from '../PutProject/putProjectSlice'
import { useDispatch } from 'react-redux'
import { openModal } from '../../Modal/modalSlice'
import Modal from '../../Modal'
import { itemsTags } from '../../../components/Tags/DataTags'

function FormProject({ method, legend, dataProject }) {
  const dispatch = useDispatch()
  const form = useRef()
  const [selectedItems, setSelectedItems] = useState(dataProject ? dataProject.tags || [] : [])
  const [selectedImage, setSelectedImage] = useState(dataProject ? dataProject.image || [] : null)
  const [isEditingImage, setIsEditingImage] = useState(false)

  const descriptionType = [
    'intro',
    'modeling',
    'development',
    'features',
    'why',
    'objective',
    'results'
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', event.target.title.value)
    formData.append(
      'description',
      JSON.stringify({
        intro: event.target.intro.value,
        modeling: event.target.modeling.value,
        development: event.target.development.value,
        features: event.target.features.value.split('\n').filter(Boolean),
        why: event.target.why.value,
        objective: event.target.objective.value.split('\n').filter(Boolean),
        results: event.target.results.value
      })
    )
    formData.append('image', selectedImage)
    formData.append('linkGithub', event.target.linkGithub.value)
    formData.append('linkDemo', event.target.linkDemo.value)
    formData.append('alt', event.target.alt.value)
    formData.append('customer', event.target.customer.value)
    formData.append('tags', JSON.stringify(selectedItems))

    if (method === 'POST') {
      dispatch(postProject(formData))
    } else if (method === 'PUT') {
      dispatch(putProject({ projectId: dataProject._id, formData }))
    }

    setTimeout(() => {
      dispatch(openModal('modalConfirmation'))
      form.current.reset()
    })
  }

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId))
    } else {
      setSelectedItems([...selectedItems, itemId])
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleEditButtonClick = () => {
    setIsEditingImage(true)
  }

  const handleCancelButtonClick = () => {
    setIsEditingImage(false)
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="form-container form-add">
      <legend>{legend}</legend>
      <div className="form-container_text">
        <div className="form-container_text" id="row">
          <Field
            type={FIELD_TYPES.INPUT_TEXT}
            label="Title :"
            name="title"
            placeholder="Enter title"
            defaultValue={dataProject ? dataProject.title : ''}
          />
          <Field
            type={FIELD_TYPES.INPUT_TEXT}
            label="Customer :"
            name="customer"
            placeholder="Enter customer"
            defaultValue={dataProject ? dataProject.customer : ''}
          />
        </div>
        <Field
          type={FIELD_TYPES.CHECKBOX}
          valueOption={itemsTags}
          checked={selectedItems}
          onChange={handleCheckboxChange}
          label="Tags :"
          value={selectedItems}
        />
      </div>
      <div className="form-container_text">
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Link GitHub :"
          name="linkGithub"
          placeholder="Enter link to GitHub"
          defaultValue={dataProject ? dataProject.linkGithub : ''}
        />
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Link Demo :"
          name="linkDemo"
          placeholder="Enter link to Demo"
          defaultValue={dataProject ? dataProject.linkDemo : ''}
        />
      </div>
      <div className="form-container_text">
        {method === 'PUT' ? (
          <>
            {isEditingImage ? (
              <Field
                type={FIELD_TYPES.INPUT_FILE}
                label="Image :"
                name="image"
                placeholder="Add images"
                onChange={handleImageChange}
                onButtonClick={isEditingImage ? handleCancelButtonClick : handleEditButtonClick}
                editMode={isEditingImage}
              />
            ) : (
              <Field
                type={FIELD_TYPES.INPUT_TEXT}
                label={'Image :'}
                name="selectedImage"
                placeholder="Selected image"
                defaultValue={selectedImage ? selectedImage : 'No image selected'}
                onButtonClick={isEditingImage ? handleCancelButtonClick : handleEditButtonClick}
                editMode={!isEditingImage}
              />
            )}
          </>
        ) : (
          <Field
            type={FIELD_TYPES.INPUT_FILE}
            label="Image :"
            name="image"
            placeholder="Add images"
            onChange={handleImageChange}
            editMode={false}
          />
        )}
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Image Alt :"
          name="alt"
          placeholder="Enter image Alt"
          defaultValue={dataProject ? dataProject.alt : ''}
        />
      </div>

      {descriptionType.map((item, index) => {
        let defaultValue = ' '
        if (dataProject?.description) {
          const description =
            typeof dataProject.description === 'string' ? JSON.parse(dataProject.description) : ' '
          defaultValue = description[item] || ' '
        }
        return (
          <Field
            key={index}
            type={FIELD_TYPES.TEXTAREA}
            label={`Description - ${item}`}
            name={item}
            placeholder="Enter description"
            defaultValue={defaultValue}
            rowsTextarea={3}
            requiredField={false}
          />
        )
      })}
      <button type="submit" className="submit-style btn">
        Submit
      </button>
      <Modal>sent successfully !!</Modal>
    </form>
  )
}

export default FormProject
