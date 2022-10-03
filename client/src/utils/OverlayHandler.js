import { setHeaderPxHeight, setSidebarPxWidth } from "../redux/overlayReducer";
import store from "../redux/store";

/**
 * Handles overlay information including header size, and sidebar width.
 */
class OverlayHandler {

    /**
     * The height of the header bar in pixels.
     * @type {Number}
     */
    static headerPxHeight = 50;
    /**
     * The width of the side bar in pixels.
     * @type {Number}
     */
    static sidebarPxWidth = 100;

    /**
     * The header bar DOM element.
     * @type {Element}
     */
    static _headerElement = null;
    /**
     * The side bar DOM element.
     * @type {Element}
     */
    static _sidebarElement = null;

    /**
     * Sets the header element in this handler.
     * @param {Element} element 
     */
    static setHeaderElement(element) {
        OverlayHandler._headerElement = element;
        OverlayHandler._attemptUpdateHeader();
    }
    /**
     * Sets the sidebar element in this handler.
     * @param {Element} element 
     */
    static setSidebarElement(element) {
        OverlayHandler._sidebarElement = element;
        OverlayHandler._attemptUpdateSidebar();
    };

    /**
     * Initialises the overlay handler.
     */
    static init() {
        window.addEventListener("resize", OverlayHandler._resizeHandler);
    }

    /**
     * Resets the overlay handler. It will need to be reinitialised to be used again.
     */
    static reset() {
        window.removeEventListener("resize", OverlayHandler._resizeHandler);
    }

    /**
     * Handle resizing of the window and update overlay states.
     */
    static _resizeHandler = () => {
        // Adjust stored values of header height and sidebar width if necessary
        OverlayHandler._attemptUpdateHeader();
        OverlayHandler._attemptUpdateSidebar();
    }

    /**
     * Attempts to update header data.
     */
    static _attemptUpdateHeader() {
        if(OverlayHandler._headerElement) {
            const headerHeight = OverlayHandler._headerElement.clientHeight;
            if(headerHeight !== OverlayHandler.headerPxHeight) {
                OverlayHandler.headerPxHeight = headerHeight;
                store.dispatch(setHeaderPxHeight(headerHeight));
            }
        }
    }

    /**
     * Attempts to update sidebar data.
     */
    static _attemptUpdateSidebar() {
        if(OverlayHandler._sidebarElement) {
            const sidebarWidth = OverlayHandler._sidebarElement.clientWidth;
            if(sidebarWidth !== OverlayHandler.sidebarPxWidth) {
                OverlayHandler.sidebarPxWidth = sidebarWidth;
                store.dispatch(setSidebarPxWidth(sidebarWidth));
            }
        }
    }

}

export default OverlayHandler;