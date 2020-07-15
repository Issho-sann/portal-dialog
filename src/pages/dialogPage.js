import React from 'react'
import PortalDialog from '../components/PortalDialog'

export default function DialogPage() {
    const [visible, setVisible] = React.useState(false)
    return (
        <>
            <button onClick={() => setVisible(true)}>打开弹框</button>
            <PortalDialog
                visible={visible}
                onClose={() => setVisible(false)}
            />
            {/* {
                visible && <PortalDialog
                    visible={visible}
                    onClose={() => setVisible(false)}
                />
            } */}
        </>
    )
}