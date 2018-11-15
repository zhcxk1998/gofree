import React, { Component } from 'react'
import { Button,Modal,Embed} from 'semantic-ui-react'

export default class VideoModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.props.closeVideoModal();
    this.setState({ modalOpen: false })
  }

  render() {
    const {modalOpen} = this.state;
    return (
      <Modal
        open={modalOpen}
        basic
        size='large'
        closeOnDocumentClick={false}
      >
        <Modal.Actions>
          <Button onClick={this.handleClose} inverted>
            x
          </Button>
        </Modal.Actions>
        <Modal.Content>
            <Embed
                url={this.props.videoUrl}
            />
        </Modal.Content>

      </Modal>
    )
  }
}