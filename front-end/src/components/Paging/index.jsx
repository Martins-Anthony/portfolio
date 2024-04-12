import React, { useState } from 'react'
import Cards from '../Cards'

function Paging({ data }) {
  const itemsPerPage = 4
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentPageData = data.slice(startIndex, endIndex)

  const columnData = []
  for (let i = 0; i < currentPageData.length; i += 2) {
    columnData.push(currentPageData.slice(i, i + 2))
  }

  return (
    <>
      <div className="paging-container">
        {columnData.map((column, index) => (
          <div key={index} className="paging-column">
            <Cards projects={column} />
          </div>
        ))}
      </div>
      {totalPages > 1 ? (
        <div className="container-bouton-slide">
          <button
            className={`btn submit-style ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={`submit-style ${index + 1 === currentPage ? 'active' : ''}`}
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button
            className="btn submit-style"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      ) : null}
    </>
  )
}

export default Paging
