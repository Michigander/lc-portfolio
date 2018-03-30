import React from 'react'

import './Art.css'

import Card from 'components/Card/Card.jsx'
import Page from 'components/Page/Page.jsx'

const photoLinks = [
  'https://www.dropbox.com/s/6y2664tuvvfr3va/lc-print1.JPG?raw=1',
  'https://www.dropbox.com/s/mq5efyhrz7u9b84/lc-print2.JPG?raw=1',
  'https://www.dropbox.com/s/ad9i8a2qhdoi834/lc-print3.JPG?raw=1',
  'https://www.dropbox.com/s/khc2iops6exz5iq/lc-print4.JPG?raw=1',
  'https://www.dropbox.com/s/m8537wm54o0e8l3/lc-print5.JPG?raw=1',    
  'https://www.dropbox.com/s/lhpim4kwm3t0nu8/lc-print6.JPG?raw=1',
  'https://www.dropbox.com/s/ddzjgl41qu16xf8/lc-print7.JPG?raw=1',
  'https://www.dropbox.com/s/phonskqe46j9yuv/lc-print8.JPG?raw=1',
  'https://www.dropbox.com/s/1sqnvn9zb6irkd3/lc-print9.JPG?raw=1',
  'https://www.dropbox.com/s/p565teicr7c691b/lc-print10.JPG?raw=1',
  'https://www.dropbox.com/s/5yc01bxhu53okhv/lc-print11.JPG?raw=1',
  'https://www.dropbox.com/s/r8j72byqom692fb/lc-print12.JPG?raw=1',
  'https://www.dropbox.com/s/2iz8b2doy5em0fw/lc-print13.JPG?raw=1',
  'https://www.dropbox.com/s/o3n31quzar2rnw2/lc-print14.JPG?raw=1',
]

const Art = () =>
  <Page>
    { photoLinks.map((src) => 
        <Card key={src}>
          <img className="art__photo" alt='' src={src} />
        </Card>
    )}
  </Page>

export default Art

