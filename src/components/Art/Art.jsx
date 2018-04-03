import React from 'react'
import { map } from 'lodash'

import './Art.css'
import artworks from './Art.config.js'
import Card from 'components/Card/Card.jsx'
import Page from 'components/Page/Page.jsx'

const Art = () =>
  <Page>
    { map(artworks, ({src, title, description}) => 
        <Card className="art__card" key={src}>
          <div className="art__photo_wrap">
            <img className="art__photo" alt='' src={src} />
          </div>
          <div className="art__title">
            { title }
          </div>
          <div className="art__description">
            { description }
          </div>
        </Card>
    )}
  </Page>

export default Art

