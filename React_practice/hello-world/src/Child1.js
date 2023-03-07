import React from 'react'
import Subchild from './Subchild'
function child1() {
  return (
    <div>
    <div>Iam child component to app</div>
    <Subchild></Subchild>
    </div>
  )
}

export default child1