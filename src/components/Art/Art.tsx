import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import artworks from "./ArtConfig";
import Card from "../../components/Card/Card";
import "./Art.css";

// class Pdf extends Component {
//   state = {
//     template: null,
//   };

//   _onLoad = ({ pdfInfo }) => {
//     console.log(pdfInfo);
//     this.setState({
//       template: Array.from(new Array(pdfInfo.numPages), () => false),
//     });
//   };

//   render() {
//     return (
//       <Document file={this.props.file} onLoadSuccess={this._onLoad}>
//         {this.state.template && this.props.children(this.state.template)}
//       </Document>
//     );
//   }
// }

// const PdfCards = ({ src, title, description }) => (
//   <Pdf file={src}>
//     {(template) =>
//       template.map((_, index) => (
//         <Page key={index} renderTextLayer={false} pageIndex={index} />
//       ))
//     }
//   </Pdf>
// );

const ImgCard: React.FC<{ src: string }> = ({ src }) => (
  <Card className="art__card">
    <a href={src} className="art__card-link">
      <div className="art__photo_wrap">
        <img className="art__photo" alt="" src={src} />
      </div>
    </a>
  </Card>
);

const Art = () => (
  <div className="Art">
    {artworks.map((datum, index) => (
      <div className="Art__section" key={`${datum.title}-${index}`}>
        <div className="Art__section-title">{datum.title}</div>
        <div className="Art__section-grid">
          {datum.artifacts.map((src, artIndex) => (
            <ImgCard src={src} key={`${datum.title}-${index}-${artIndex}`} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Art;
