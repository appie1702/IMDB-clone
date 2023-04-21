
import React from 'react'
import {create} from 'zustand'


//like redux and context api
const signinHook = create((set) => ({
  isOpen:false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default signinHook