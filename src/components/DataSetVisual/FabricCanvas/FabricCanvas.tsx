
import { useRef } from 'react'

import { useInitFabric } from './hooks/useInitFabric'
import './FabricCanvas.module.less'

// 这几个基本也够了
type DataItem = {
    type: string,
    points?: Array<any>,
    color?: string,
    fill?: string,
    rectData?: Array<any>,
}

//
type Props= {
    url?:string,
    data?: Array<DataItem>
}

const FabricCanvas = (props: Props) => {
  const { url, data } = props

  const canvas = useRef<any>(null)
  const canvasContainer = useRef<any>(null)

  useInitFabric({
    canvasEle: canvas,
    canvasContainer,
    canvasData: data || [],
    url,
  })

  return (
    <div styleName='FabricCanvas' ref={canvasContainer}>

      <canvas ref={canvas} className='canvas' />
    </div>
  )
}

export default FabricCanvas
