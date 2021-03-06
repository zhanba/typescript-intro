import * as React from 'react'

export interface IAppProps<T> {
  name: string
  onClick: (val: T) => void
}

export default class App<T> extends React.Component<IAppProps<T>> {
  public render() {
    return <div>yeah: {this.props.name}</div>
  }
}
