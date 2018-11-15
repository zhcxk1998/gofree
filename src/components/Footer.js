import React, { Component } from 'react'
import { Segment, Header, Container } from 'semantic-ui-react'


export default class Footer extends Component {

    render() {
        return (
            <Segment inverted vertical style={{
                padding: '2em 0em'
            }}>
              <Container textAlign='center'>
                <Header as='h4' inverted>Copyright © 2017 GoFree</Header>
              </Container>
            </Segment>
        )
    }
}