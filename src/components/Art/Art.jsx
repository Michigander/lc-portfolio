import React, { Component } from 'react'
import { map } from 'lodash'
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import './Art.css'
import artworks from './Art.config.js'
import Card from 'components/Card/Card.jsx'
import LcPage from 'components/Page/Page.jsx'

class Pdf extends Component {
  state = {
    template: null
  }

  _onLoad = ({ pdfInfo }) => {
    console.log(pdfInfo)
    this.setState({ template: Array.from(new Array(pdfInfo.numPages), () => false) })
  }

  render() {
    return (
      <Document file={this.props.file} onLoadSuccess={this._onLoad}>
        { this.state.template && this.props.children(this.state.template) }
      </Document>
    )
  }
}

const ImgCard = ({ src, title, description}) => 
  <Card className="art__card">
    <div className="art__photo_wrap">
      <img className="art__photo" alt='' src={src} />
    </div>
    <div className="art__title">
      { title }
    </div>
  </Card>

const PdfCards = ({ src, title, description }) => 
  <Pdf file={src}>
    { template => template.map((_, index) => <Page key={index} renderTextLayer={false} pageIndex={index} /> ) }
  </Pdf>
  
const Art = () =>
  <LcPage>
    { map(artworks, ({extension, ...artwork}) => 
        extension === "pdf" 
          ? <PdfCards {...artwork} key={artwork.title} />
          : <ImgCard {...artwork} key={artwork.title} />
    )}
  </LcPage>

export default Art

