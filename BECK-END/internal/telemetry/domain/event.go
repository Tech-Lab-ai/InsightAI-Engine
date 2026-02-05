package domain

import "time"

type SeverityLevel string

const (
	InfoLevel     SeverityLevel = "INFO"
	WarningLevel  SeverityLevel = "WARNING"
	SecurityLevel SeverityLevel = "SECURITY"
	CriticalLevel SeverityLevel = "CRITICAL"
)

// TelemetryEvent representa um evento de telemetria.
type TelemetryEvent struct {
	Timestamp time.Time
	Severity  SeverityLevel
	Name      string
	Payload   map[string]interface{}
}
