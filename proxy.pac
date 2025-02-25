function FindProxyForURL(url, host) {
// Define a list of domains to bypass proxy (direct access)

  const bypassList = [
    "*.elev.bergenkom.no",
    "*.bergensskolen.no",
    "pki.bergen.kommune.no",
    "vcse.statped.no",
    "vcsc.statped.no",
    "fw.statped.no"
  ];

// Loop through the bypass list 
  for (let i = 0; i < bypassList.length; i++) { 
    if (shExpMatch(host, bypassList[i])) { 
      return "DIRECT"; // Direct connection for these domains
    }
  }

  // For all other URLs, atteempt to use the proxy. 
  return "PROXY 85.19.187.200:8080; DIRECT";
}
