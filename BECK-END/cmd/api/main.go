package main

import (
	"log"
	"net/http"

	"insightai/internal/config"
	"insightai/internal/server"

	"github.com/joho/godotenv"
)

func main() {
	// Carrega as variáveis de ambiente do arquivo .env
	// Em produção, as variáveis devem ser gerenciadas pelo ambiente de execução.
	err := godotenv.Load()
	if err != nil {
		log.Println("Aviso: Não foi possível carregar o arquivo .env. Usando variáveis de ambiente do sistema.")
	}

	config.Load()

	srv := server.New()

	log.Printf("🚀 %s rodando na porta %s no ambiente %s", config.Cfg.AppName, config.Cfg.Port, config.Cfg.Env)
	log.Fatal(http.ListenAndServe(":"+config.Cfg.Port, srv))
}
