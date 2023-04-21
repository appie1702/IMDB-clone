import React from 'react'
import {create} from 'zustand'


//like redux and context api
const toprated_page = create((set) => ({
  page:1,
  incre: () => set((state)=>({page: state.page + 1})),
  decre: () => set((state)=>({page: state.page > 1 ? state.page - 1 : state.page})),
}))

export default toprated_page