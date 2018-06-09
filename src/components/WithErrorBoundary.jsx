import React, { PureComponent } from 'react'

export default function (Component) {
  return class extends PureComponent {
    constructor() {
      super()
      this.state = { hasError: false }
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>
      }
      return (
        <div>
          <Component {...this.props} />
        </div>
      )
    }
  }
}
