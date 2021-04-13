try {
  const href = window.location.href
  const url = href.substring(0, href.lastIndexOf('/') + 1)
  const hash = Number(window.location.hash.substring(1)) || index

  const handleRes = () => {
    if (req.readyState == 4 && req.status == 200) {
      const { title, content } = JSON.parse(req.responseText)
      document.getElementById('Title').innerText = title
      document.getElementById('Content').innerText = content

      const prevBtn = document.getElementById('Prev')
      if (hash === 1) { prevBtn.disabled = true }
      else { prevBtn.href = '#' + hash - 1 }
      const nextBtn = document.getElementById('Next')
      if (hash === index) { nextBtn.disabled = true }
      else { nextBtn.href = '#' + hash + 1 }
    }
  }
  if (window.XMLHttpRequest) { req = new XMLHttpRequest() }
  else { req = new ActiveXObject("Microsoft.XMLHTTP") }// legacy
  req.onreadystatechange = handleRes
  req.open("GET", url + hash + '.json', false)
  req.send()

} catch(ex) { console.log(ex) }
