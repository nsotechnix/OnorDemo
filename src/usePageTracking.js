import { useEffect } from "react"
import ReactGA from "react-ga"
import { withRouter } from "react-router"

ReactGA.initialize("UA-180746434-1")
let usePageTracking = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [window.location.pathname])
}
// usePageTracking = withRouter(usePageTracking)
export default usePageTracking