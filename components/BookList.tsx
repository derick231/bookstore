import React from 'react'

interface Props{
  title: string
  containerClassName?: string,
  books: Book[]
}

const BookList = ( {title, containerClassName, books}: Props) => {
  return (
    <section>
      <h2 className='text-4xl text-light-100'>Popular Books</h2>
    </section>
  )
}

export default BookList