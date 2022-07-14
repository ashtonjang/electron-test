'use strict';

const e = React.createElement;

class WarpWebview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		return (
			<webview
				id="iframeComp"
				src="https://static1.einfomax.co.kr/html/test/test.html"
				preload="preloadwebview.js"
				disablewebsecurity="false"
				useragent="weblink3"
				allowpopups="true"
				webpreferences="nativeWindowOpen=yes, contextIsolation=no"
				nodeintegration="true"
				nodeintegrationinsubframes="true"
			></webview>
		)
  }
}

const domContainer = document.querySelector('#webview_container');
ReactDOM.render(e(WarpWebview), domContainer);
