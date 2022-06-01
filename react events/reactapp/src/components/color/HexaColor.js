import React from 'react';
import { hexaColor } from '../../utilities/hexaColor';


const HexaColor = () => (
    <div style = {{backgroundColor : `${hexaColor()}`}}>
        {hexaColor()}
    </div>
)
export default HexaColor