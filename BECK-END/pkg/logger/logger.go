package logger

import (
	"log"
	"os"
)

// TODO: Implementar um logger estruturado real (ex: zerolog, logrus)
// Por enquanto, usaremos o logger padrão do Go.

func New() *log.Logger {
	return log.New(os.Stdout, "", log.LstdFlags)
}
