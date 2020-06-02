// If you don't want to use TypeScript you can delete this file!
import React from "react"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <p>Using Typescript</p>
)

export default UsingTypescript
