import React from 'react'
import { createPortal } from 'react-dom'
import './index.css'

const node = window.document.createElement('div')

export default function PortalDialog(props) {
    React.useEffect(() => {
        window.document.body.appendChild(node)
        return () => {
            window.document.body.removeChild(node)
        }
        // eslint-disable-next-line
    }, [])

    return props.visible && createPortal(
        <div className="protal-dialog">
            <span className="close" onClick={props.onClose}>X</span>
            <h2>portal</h2>
        </div>,
        node
    )
}

// export default class PortalDialog extends React.Component {
//     constructor(props) {
//         super(props)
//         const doc = window.document
//         this.node = doc.createElement('div')
//         doc.body.appendChild(this.node)
//         console.log(1111)
//     }
//     componentWillUnmount() {
//         console.log(222)
//         // window.document.body.removeChild(this.node)
//     }
//     render() {
//         return this.props.visible && createPortal(
//             <div className="protal-dialog">
//                 <span className="close" onClick={this.props.onClose}>X</span>
//                     <h2>portal</h2>
//             </div>,
//             this.node
//         )
//     }
// }