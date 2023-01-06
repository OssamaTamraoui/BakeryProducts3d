import {Paper} from "@material-ui/core"
import React from "react"
import DracoSelector from "../components/DracoSelector"
import MaterialSelector from "../components/MaterialSelector"

import MeshSelector from "../components/MeshSelector"
import NodeSelector from "../components/NodeSelector"
import PeopleSelector from "../components/PeopleSelector"
import DecoSelector from "../components/DecoSelector"
import ProductSelector from "../components/ProductSelector"
import Viewer3D from "../components/Viewer3D"
import MaterialSettings from "../components/MaterialSettings/MaterialSettings"
import { ButtonGroup } from "@material-ui/core"
import {FormControl, InputLabel, Select} from "@material-ui/core"



export default function Home() {
  return (
    <>
      <Paper className="controls-wrap" >
        <PeopleSelector />
        <NodeSelector />
        <DecoSelector />
      </Paper>

      <Paper className="newcontrols-top-material">

        <ProductSelector />
      </Paper>
      <div className="controls-top-material">
        <MaterialSettings />
      </div>
      
      
      <div className="controls-material">
        <MaterialSelector />
      </div>
      <Viewer3D />
    </>
  )
}
