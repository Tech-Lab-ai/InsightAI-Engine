package middleware

import (
	"log"
	"net/http"
	"runtime/debug"

	"insightai/pkg/errors"
)

// Recoverer é um middleware que se recupera de panics, loga o erro e retorna uma resposta 500.
func Recoverer(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if rvr := recover(); rvr != nil {
				log.Printf("Panic: %+v\n%s", rvr, debug.Stack())
				errors.InternalError(w, "Ocorreu um erro inesperado no servidor.")
			}
		}()
		next.ServeHTTP(w, r)
	})
}
