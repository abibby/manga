package httpratelimit

import (
	"net/http"
	"time"
)

// ThrottledTransport wraps a standard RoundTripper and enforces a rate limit.
type ThrottledTransport struct {
	underlying http.RoundTripper
	limiter    <-chan time.Time
}

func NewThrottledTransport(d time.Duration) *ThrottledTransport {
	ticker := time.NewTicker(d)
	return &ThrottledTransport{
		underlying: http.DefaultTransport,
		limiter:    ticker.C,
	}
}

// RoundTrip intercepts the request and blocks until the rate limiter allows it through.
func (t *ThrottledTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	// Wait for a tick, or abort if the request context is canceled
	select {
	case <-t.limiter:
	case <-req.Context().Done():
		return nil, req.Context().Err()
	}

	// Fallback to default transport if none was provided
	transport := t.underlying
	if transport == nil {
		transport = http.DefaultTransport
	}

	return transport.RoundTrip(req)
}

// NewClient builds an HTTP client that hits a hard brake at 1 request/second.
func NewClient(d time.Duration) *http.Client {

	return &http.Client{
		Timeout:   10 * time.Second, // Always a good idea to set a timeout
		Transport: NewThrottledTransport(d),
	}
}
