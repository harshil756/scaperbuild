import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import QuotePopupForm from './QuotePopupForm.jsx'

const POPUP_CONFIG = {
  9458: {
    elementorClass: 'elementor-9458',
    title: 'Have an enquiry?',
    subtitle: 'Leave us your details and we’ll call you back during business hours.',
    postId: 9458,
    formId: '70e23a0',
    animation: 'fadeInUp',
  },
  7841: {
    elementorClass: 'elementor-7841',
    title: 'Get A Free Quote Now!',
    subtitle: null,
    postId: 7841,
    formId: '70e23a0',
    animation: 'zoomInUp',
  },
}

export default function ElementorPopupModal({ popupId, onClose }) {
  const config = POPUP_CONFIG[popupId]

  useEffect(() => {
    if (!config) return undefined

    document.body.classList.add('dialog-prevent-scroll')
    return () => {
      document.body.classList.remove('dialog-prevent-scroll')
    }
  }, [config])

  if (!config) return null

  const modal = (
    <div
      aria-modal="true"
      className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal react-quote-popup"
      id={`elementor-popup-modal-${popupId}`}
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === 'Escape') onClose()
      }}
      role="document"
      style={{ display: 'flex' }}
      tabIndex={0}
    >
      <div
        className={`dialog-widget-content dialog-lightbox-widget-content animated ${config.animation}`}
        onClick={(event) => event.stopPropagation()}
        style={{ position: 'relative' }}
      >
        <button
          aria-label="Close"
          className="dialog-close-button dialog-lightbox-close-button"
          onClick={onClose}
          type="button"
        >
          <svg className="e-font-icon-svg e-eicon-close eicon-close">
            <use xlinkHref="#eicon-close" />
          </svg>
        </button>
        <div className="dialog-header dialog-lightbox-header" />
        <div className="dialog-message dialog-lightbox-message">
          <div
            className={`elementor elementor-${popupId} elementor-location-popup ${config.elementorClass}`}
            data-elementor-id={popupId}
            data-elementor-post-type="elementor_library"
          >
            <div
              className="elementor-element elementor-element-1be38fc e-flex e-con-boxed e-con e-parent"
              data-element_type="container"
              data-id="1be38fc"
              data-settings='{"background_background":"gradient"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-d71e3e5 e-con-full e-flex e-con e-child"
                  data-element_type="container"
                  data-id="d71e3e5"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div
                    className="elementor-element elementor-element-a730953 elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-id="a730953"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">{config.title}</h2>
                    </div>
                  </div>
                  {config.subtitle ? (
                    <div
                      className="elementor-element elementor-element-8296964 elementor-widget elementor-widget-heading"
                      data-element_type="widget"
                      data-id="8296964"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h6 className="elementor-heading-title elementor-size-default">{config.subtitle}</h6>
                      </div>
                    </div>
                  ) : null}
                  <div
                    className="elementor-element elementor-element-70e23a0 elementor-button-align-center elementor-widget elementor-widget-form"
                    data-element_type="widget"
                    data-id="70e23a0"
                    data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                    data-widget_type="form.default"
                  >
                    <div className="elementor-widget-container">
                      <QuotePopupForm
                        formId={config.formId}
                        idPrefix={`popup-${popupId}`}
                        postId={config.postId}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper" />
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
