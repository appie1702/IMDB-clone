import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto py-4 justify-center gap-6">
        {results.map((result)=>(
            <div key={result.id} >
                <Card key={result.id} result={result}/>
            </div>
        ))}
    </div>
  )
}

export default Results