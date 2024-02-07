import { Component } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import { Container } from './style'

interface InputTagsProps {
  handleTags: (tags: string[]) => void
  tags?: string[]
}

interface InputTagsState {
  tags: string[]
}

export default class InputTags extends Component<InputTagsProps, InputTagsState> {
  constructor (props: InputTagsProps) {
    super(props)
    this.state = {
      tags: Array.isArray(props.tags) ? [...props.tags] : []
    }
  }

  handleChange = (tags: string[]): void => {
    this.setState({ tags })
    this.props.handleTags(tags)
  }

  render (): JSX.Element {
    return (
      <Container>
        <label>Input de Tags</label>
        <TagsInput
          value={this.state.tags}
          onChange={this.handleChange}
        />
      </Container>
    )
  }
}
