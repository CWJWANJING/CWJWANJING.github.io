import * as React from 'react'

export default function ImageModal({ modalHtml, modalSrc, onClose, onPrev, onNext, showNav = false }) {
    if (!modalHtml && !modalSrc) return null

    return (
        <div className="art-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) { onClose && onClose() } }}>
            <div className="art-modal-content" onClick={(e) => { if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'PICTURE')) { onClose && onClose() } }}>
                <button className="art-modal-close" aria-label="Close" onClick={() => onClose && onClose()}>×</button>
                {showNav && (
                    <>
                        <button className="art-modal-prev" onClick={(e) => { e.stopPropagation(); onPrev && onPrev() }} aria-label="Previous">‹</button>
                        <button className="art-modal-next" onClick={(e) => { e.stopPropagation(); onNext && onNext() }} aria-label="Next">›</button>
                    </>
                )}
                {modalHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: modalHtml }} />
                ) : (
                    modalSrc && <img src={modalSrc} alt="Artwork" />
                )}
            </div>
        </div>
    )
}
