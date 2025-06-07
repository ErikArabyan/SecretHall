window.addEventListener('load', () => {
	document.querySelectorAll('img').forEach(img => {
		const link = document.createElement('link')
		link.rel = 'preload'
		link.as = 'image'
		link.href = img.src
		document.head.appendChild(link)
	})
})
