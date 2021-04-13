try {
  document.getElementById('Content').innerText = "Just a place for some of my dev thoughts and opinions to collect.\nUsually I type them out as they come on Notepad with or without saving them.\n\nI am and have been a full-stack web developer with affinity for the front-end."
  const href = window.location.href
  const url = href.substring(0, href.lastIndexOf('/'))
  const hash = Number(window.location.hash.substring(1)) || index

  const handleRes = () => {
    if (req.readyState == 4 && req.status == 200) {
      console.log(req.responseText)
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
  req.open("GET", url + '/content/' + hash + '.json', false)
  req.send()

} catch(ex) { console.log(ex) }
