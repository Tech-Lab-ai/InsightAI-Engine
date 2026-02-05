package middleware

import (
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5/middleware"
)

// Logger é um middleware de log estruturado.
func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ww := middleware.NewWrapResponseWriter(w, r.ProtoMajor)
		t1 := time.Now()
		defer func() {
			requestID := middleware.GetReqID(r.Context())
			// tenantID, _ := GetTenantFromCtx(r.Context())
			// userID, _ := GetUserIDFromCtx(r.Context())

			log.Printf(
				"[%s] \"%s %s %s\" %d %d %s",
				requestID,
				r.Method,
				r.URL.Path,
				r.Proto,
				ww.Status(),
				ww.BytesWritten(),
				time.Since(t1),
			)
		}()
		next.ServeHTTP(ww, r)
	})
}
