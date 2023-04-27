jsPlumb.ready(function () {
  jsPlumb.Defaults.Endpoint = 'Blank';
  const container = document.getElementById('mainpage');
  jsPlumb.setContainer(container);

  const endpointOptions = {
    isSource: true,
    isTarget: true,
    maxConnections: -1,
  };

  const sectionImages = document.getElementsByClassName('screenshot-bkg');
  let lastEndpoint = null;

  Array.from(sectionImages).forEach((sectionImage) => {
    // Skip hidden section images
    if (getComputedStyle(sectionImage, null).display == 'none') {
      return;
    }
    // Use jsPlumb to draw bezier lines between section images
    const newEndpoint = jsPlumb.addEndpoint(
      sectionImage,
      { anchor: 'Center' },
      endpointOptions
    );
    if (lastEndpoint != null) {
      jsPlumb.connect({
        source: lastEndpoint,
        target: newEndpoint,
        connector: [
          'Bezier',
          { curviness: 800 },
          { cssClass: 'connectorClass' },
        ],
        paintStyle: { stroke: '#F4F6F8', strokeWidth: 100 },
      });
    }
    lastEndpoint = newEndpoint;
  });
});
