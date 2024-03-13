import React from 'react'
import PropTypes from 'prop-types'

function Tags({ tags, className }) {
  const itemsList = tags.map((item, index) => {
    return (
      <div className={`tags-style ${className}`} key={item}>
        {tags[index]}
      </div>
    )
  })
  return <div className="tags-container">{itemsList}</div>
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Tags
