let baseUrl;

if (process.env.NODE_ENV !== 'production') {
    baseUrl = "http://go.nanmuduo.com:8000"
}else {
	baseUrl = "http://go.nanmuduo.com:8000"
}

export {baseUrl}
