import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import artworks from './Art.config.js'
import Card from 'components/Card/Card.jsx'
import './Art.css'

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
  </Card>

const PdfCards = ({ src, title, description }) => 
  <Pdf file={src}>
    { template => template.map((_, index) => 
        <Page key={index} renderTextLayer={false} pageIndex={index} /> 
    )}
  </Pdf>
  
const Art = () =>
  <div className="Art">
    { artworks.map(datum => 
        <div className="Art__section">
          <div className="Art__section-title">
            { datum.title }
          </div>
          { datum.artifacts.map((src, index) => datum.type === "pdf"
              ? <PdfCards src={src} key={`${datum.type}-${index}`} />
              : <ImgCard src={src} key={`${datum.type}-${index}`} />
          )}  
        </div>
    )}
  </div>

export default Art

