import * as React from "react"
import GalleryElements from "./GalleryElements"

export default function ArtworkGallery() {
    const [modalSrc, setModalSrc] = React.useState(null)
    const [modalHtml, setModalHtml] = React.useState(null)
    const [galleryItems, setGalleryItems] = React.useState([])
    const [currentIndex, setCurrentIndex] = React.useState(-1)

    React.useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setModalSrc(null)
                setModalHtml(null)
                setCurrentIndex(-1)
            } else if (e.key === "ArrowLeft") {
                showPrev()
            } else if (e.key === "ArrowRight") {
                showNext()
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [galleryItems, currentIndex])

    function onContainerClick(e) {
        // find the gallery item wrapper (works whether StaticImage applies class to wrapper)
        const item = e.target.closest && e.target.closest('.gallery-link')
        if (!item) return

        // collect all gallery items in DOM order
        const nodes = Array.from(document.querySelectorAll('.gallery-link'))
        if (!nodes.length) return

        const items = nodes.map((node) => {
            const picture = node.querySelector && node.querySelector('picture')
            const img = node.querySelector && node.querySelector('img')
            if (picture) return { html: picture.outerHTML }
            if (img) return { src: img.currentSrc || img.src }
            return null
        }).filter(Boolean)

        const idx = nodes.indexOf(item)
        if (idx === -1) return

        setGalleryItems(items)
        setCurrentIndex(idx)
        const entry = items[idx]
        if (entry.html) {
            setModalHtml(entry.html)
            setModalSrc(null)
        } else {
            setModalSrc(entry.src)
            setModalHtml(null)
        }
    }

    function showPrev() {
        if (!galleryItems.length) return
        const nextIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
        setCurrentIndex(nextIndex)
        const entry = galleryItems[nextIndex]
        if (entry.html) {
            setModalHtml(entry.html)
            setModalSrc(null)
        } else {
            setModalSrc(entry.src)
            setModalHtml(null)
        }
    }

    function showNext() {
        if (!galleryItems.length) return
        const nextIndex = (currentIndex + 1) % galleryItems.length
        setCurrentIndex(nextIndex)
        const entry = galleryItems[nextIndex]
        if (entry.html) {
            setModalHtml(entry.html)
            setModalSrc(null)
        } else {
            setModalSrc(entry.src)
            setModalHtml(null)
        }
    }

    return (
        <>
            <div style={{ marginLeft: "2%", marginRight: "2%" }} onClick={onContainerClick}>
                <h1 className="pageTitle" style={{ textAlign: "center" }}>My Artwork</h1>
                <GalleryElements />
            </div>

            {(modalSrc || modalHtml) && (
                <div className="art-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setModalSrc(null); setModalHtml(null); } }}>
                        <div className="art-modal-content" onClick={(e) => {
                            // clicking the big image closes modal
                            if (e.target.tagName === 'IMG' || e.target.tagName === 'PICTURE') {
                                setModalSrc(null)
                                setModalHtml(null)
                                setCurrentIndex(-1)
                                setGalleryItems([])
                            }
                        }}>
                            <button className="art-modal-close" onClick={() => { setModalSrc(null); setModalHtml(null); setCurrentIndex(-1); setGalleryItems([]) }} aria-label="Close">×</button>
                            <button className="art-modal-prev" onClick={(e) => { e.stopPropagation(); showPrev() }} aria-label="Previous">‹</button>
                            <button className="art-modal-next" onClick={(e) => { e.stopPropagation(); showNext() }} aria-label="Next">›</button>
                            {modalHtml ? (
                                <div dangerouslySetInnerHTML={{ __html: modalHtml }} />
                            ) : (
                                modalSrc && <img src={modalSrc} alt="Artwork" />
                            )}
                        </div>
                </div>
            )}
        </>
    )
}