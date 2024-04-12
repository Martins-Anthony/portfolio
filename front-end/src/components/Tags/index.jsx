import React from 'react'
import PropTypes from 'prop-types'
import { frontEndTags, backEndTags, UX } from '../Tags/DataTags'

function Tags({ tags, className }) {
  const renderTagItem = (tagName) => {
    let tagClass = ''
    if (frontEndTags.includes(tagName)) {
      tagClass = 'tag-front-end'
    } else if (backEndTags.includes(tagName)) {
      tagClass = 'tag-back-end'
    } else if (UX.includes(tagName)) {
      tagClass = 'tag-ux'
    }
    return (
      <div className={tagClass} key={tagName}>
        {tagName}
      </div>
    )
  }
  const itemsList = tags.map((tagName, index) => {
    return (
      <div className={`tags-style ${className}`} key={index}>
        {renderTagItem(tagName)}
      </div>
    )
  })
  return <div className="tags-container">{itemsList}</div>
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Tags
