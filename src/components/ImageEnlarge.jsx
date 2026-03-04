import * as React from 'react'
import ImageModal from './ImageModal'

export default function ImageEnlarge() {
    const [modalHtml, setModalHtml] = React.useState(null)
    const [modalSrc, setModalSrc] = React.useState(null)

    React.useEffect(() => {
        function onClick(e) {
            const item = e.target.closest && e.target.closest('.enlargeable, .gallery-link')
            if (!item) return
            const picture = item.querySelector && item.querySelector('picture')
            const img = item.querySelector && item.querySelector('img')
            if (!picture && !img) return
            if (picture) {
                setModalHtml(picture.outerHTML)
                setModalSrc(null)
            } else {
                setModalSrc(img.currentSrc || img.src)
                setModalHtml(null)
            }
        }

        function onKey(e) {
            if (e.key === 'Escape') {
                setModalHtml(null)
                setModalSrc(null)
            }
        }

        document.addEventListener('click', onClick)
        window.addEventListener('keydown', onKey)
        return () => {
            document.removeEventListener('click', onClick)
            window.removeEventListener('keydown', onKey)
        }
    }, [])

    return (
        <ImageModal
            modalHtml={modalHtml}
            modalSrc={modalSrc}
            onClose={() => { setModalHtml(null); setModalSrc(null) }}
            showNav={false}
        />
    )
}
